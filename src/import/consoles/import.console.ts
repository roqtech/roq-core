import { ConfigService } from '@nestjs/config';
import { gql } from 'apollo-server-express';
import { CommandOptions } from 'commander';
import * as csv from 'csvtojson';
import * as fs from 'fs';
import { Command, Console } from 'nestjs-console';
import * as path from 'path';
import { ImportService } from 'src/import/services';
import { LoggingTypeEnum } from 'src/logger/enums';
import { Logger } from 'src/logger/services';
import { PlatformServiceAccountClientService } from 'src/platformClient/services/platform-service-account-client.service';
import { Connection, createConnection, getConnection } from 'typeorm';
import { v4 } from 'uuid';

@Console()
export class ImportConsole {
  constructor(
    public logger: Logger,
    private importService: ImportService,
    private configService: ConfigService,
    private platformServiceAccountClientService: PlatformServiceAccountClientService
  ) {}

  @Command({
    command: 'import-entities',
    description: 'Seed data',
    options: [
      {
        required: false,
        flags: '--flush',
      },
      {
        required: false,
        flags: '--initial',
      }
    ],
  })
  async importData(
    options: CommandOptions & { flush?: boolean; initial?: boolean; dbConnection?: Connection },
  ): Promise<void> {
    let flush = false;
    if (options && Object.keys(options).includes('flush') && options.flush === true) {
      flush = true;
    }
    let initial = false;
    if (options && Object.keys(options).includes('initial') && options.initial === true) {
      initial = true;
    }
    let connection
    try {
      connection = getConnection()
    } catch (error) {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Could not establish connection getConnection()',
      });
      try {
        connection = await createConnection({
          type: 'postgres',
          url: this.configService.get('application.databaseUrl'),
        })
      } catch (error) {
        this.logger.log({
          type: LoggingTypeEnum.importData,
          message: 'Could not establish connection createConnection()',
        });
        process.exit(1);
      }
    }
    if (initial) {
      await connection.query('create table if not exists seed_initialised (date timestamp NOT NULL);');
      const result = await connection.query('select count(*) from seed_initialised;');
      const count = Number(result[0].count);
      if (!isNaN(count) && count > 0) {
        return;
      }
      await connection.query('insert into seed_initialised (date) values (NOW())');
    }
    const configuration = this.configService.get('application.importDataConfigs');
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: 'Platform import seed configuration',
      data: {
        configuration
      }
    });
    const platformSources = configuration.filter((config) => config.isPlatform);
    const nonPlatformSources = configuration.filter((config) => !config.isPlatform);
    for (const config of nonPlatformSources) {
      await this.importEntities(flush, connection, { source: config.source });
    }
    for (const config of platformSources) {
      await this.importPlatform(config.source, config.features);
    }
  }

  async importPlatform(source: string, features: string[]): Promise<void> {
    const directory = `/data/${source}`;
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: `Reading platform directories from ${source}`,
    });
    let directories = fs
      .readdirSync(path.join(process.cwd(), directory), { withFileTypes: true })
      .filter((item) => item.isDirectory());
    if (features) {
      directories = directories.filter((d) => features.some((feature) => d.name === feature));
    }
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: 'Platform directories loaded',
    });
    for (const subDirectory of directories) {
      const name = subDirectory.name;
      const subDirectoryPath = path.join(process.cwd(), directory, subDirectory.name);

      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Reading files from ${subDirectory.name}`,
      });
      const files = fs.readdirSync(subDirectoryPath);
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Files loaded',
      });

      const variables: { [key in string]: Record<string, string>[]} = {};
      for (const file of files) {
        const extension = path.extname(file);
        const entityName = path.basename(file, extension);
        this.logger.log({
          type: LoggingTypeEnum.importData,
          message: `Reading ${entityName}`,
        });
        variables[entityName] = await csv({ flatKeys: true }).fromFile(
          path.join(subDirectoryPath, `${entityName}${extension}`),
        );
        this.logger.log({
          type: LoggingTypeEnum.importData,
          message: `Reading of ${entityName} done`,
        });
      }

      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Start importing files to ${name} service`,
      });

      try {
        const requestId = v4();
        const requestCaller = this.configService.get('application.appName');
        const headers = {};
        headers[this.configService.get('application.platform.requestIdHeader')] = requestId;
        headers[this.configService.get('application.platform.requestCallerHeader')] = requestCaller;
        await this.platformServiceAccountClientService.request(
          {
            mutation: gql`
          mutation ${name}ImportData($data: DataImportDto!) {
            ${name}ImportData(data: $data)
          }
        `,
            variables: {
              data: { data: variables },
            },
          },
          null,
          headers,
        );
        this.logger.log({
          type: LoggingTypeEnum.importData,
          message: `Import for ${name} succeed`,
        });
      } catch (error ) {
        this.logger.log({
          type: LoggingTypeEnum.importData,
          message: `Import for ${name} failed`,
          data: { error }
        });
        process.exit(1);
      }
    }
  }

  async importEntities(flush: boolean, connection: Connection, {source, absolute = false}:{source: string, absolute?: boolean}): Promise<void> {
    try {
      const directory = absolute ? source : path.join(process.cwd(), `/data/${source}`);
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Reading of files started for ${source}`,
      });
      const files = fs.readdirSync(directory);

      const data = {};
      for (const file of files) {
        const extension = path.extname(file);
        const entityName = path.basename(file, extension);
        if (!connection.hasMetadata(entityName)) {
          continue;
        }
        data[entityName] = await csv({ flatKeys: true }).fromFile(
          path.join(directory, `${entityName}${extension}`),
        );
      }
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Reading of files done',
      });
      await this.importService.importData(connection, data, flush);
    } catch (err) {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        data: {
          stack: err.stack,
          message: err.message,
          response: err.response,
        },
        message: `Reading of files failed for ${source}`,
      });
      process.exit(1);
    }
  }
}
