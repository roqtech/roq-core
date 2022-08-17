import { ConfigService } from '@nestjs/config';
import { gql } from '@apollo/client/core';
import { CommandOptions } from 'commander';
import * as csv from 'csvtojson';
import * as fs from 'fs';
import { Command, Console } from 'nestjs-console';
import * as path from 'path';
import { ImportService } from 'src/import/services';
import { PlatformEventSubscriber } from 'src/import/interface';
import { LoggingTypeEnum } from 'src/logger/enums';
import { Logger } from 'src/logger/services';
import { PlatformServiceAccountClientService } from 'src/platformClient/services';
import { Connection, createConnection, getConnection } from 'typeorm';
import { v4 } from 'uuid';

@Console()
export class ImportConsole {
  constructor(
    public logger: Logger,
    private importService: ImportService,
    private configService: ConfigService,
    private platformServiceAccountClientService: PlatformServiceAccountClientService,
  ) {}

  @Command({
    command: 'import-entities',
    description: 'Seed data',
    options: [
      {
        required: false,
        flags: '--flush',
      },
    ],
  })
  async importData(
    options: CommandOptions & { flush?: boolean; initial?: boolean; dbConnection?: Connection },
  ): Promise<void> {
    let flush = false
    if (options && Object.keys(options).includes('flush') && options.flush === true) {
      flush = true
    }
    let connection
    try {
      connection = getConnection()
    } catch (error) {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Could not establish connection getConnection()',
      })
      try {
        connection = await createConnection({
          type: 'postgres',
          url: this.configService.get('application.databaseUrl'),
        })
      } catch (error) {
        this.logger.log({
          type: LoggingTypeEnum.importData,
          message: 'Could not establish connection createConnection()',
        })
        process.exit(1)
      }
    }
    const configuration = this.configService.get('application.importDataConfigs')
    this.logger.log({
      type: LoggingTypeEnum.importData,
      message: 'Platform import seed configuration',
      data: {
        configuration,
      },
    })
    for (const source of configuration) {
      await this.importEntities(flush, connection, { source })
    }
  }

  async importEntities(
    flush: boolean,
    connection: Connection,
    { source, absolute = false }: { source: string; absolute?: boolean },
  ): Promise<void> {
    try {
      const directory = absolute ? source : path.join(process.cwd(), `/data/${source}`)
      if (!fs.existsSync(directory)) {
        return Promise.resolve()
      }
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: `Reading of files started for ${source}`,
      })
      const files = fs.readdirSync(directory)

      const data = {}
      for (const file of files) {
        const extension = path.extname(file)
        const entityName = path.basename(file, extension)
        if (!connection.hasMetadata(entityName)) {
          continue
        }
        data[entityName] = await csv({ flatKeys: true }).fromFile(path.join(directory, `${entityName}${extension}`))
      }
      this.logger.log({
        type: LoggingTypeEnum.importData,
        message: 'Reading of files done',
      })
      await this.importService.importData(connection, data, flush)
    } catch (err) {
      this.logger.log({
        type: LoggingTypeEnum.importData,
        data: {
          stack: err.stack,
          message: err.message,
          response: err.response,
        },
        message: `Reading of files failed for ${source}`,
      })
      process.exit(1)
    }
  }

  @Command({
    command: 'import-event-subscribers',
    description: 'Importing event subscribers',
  })
  public async importEventSubscribers(eventSubscribers: PlatformEventSubscriber[]): Promise<void> {
    const eventConfigs = fs
      .readFileSync(path.join(process.cwd(), 'src', 'config', 'platform-events.json'))
      .toString('utf-8')
    const variables = {
      data: eventSubscribers?.length > 0 ? eventSubscribers : JSON.parse(eventConfigs),
    }
    const requestId = v4()
    const requestCaller = this.configService.get('application.appName')
    const headers = {}
    headers[this.configService.get('application.platform.requestIdHeader')] = requestId
    headers[this.configService.get('application.platform.requestCallerHeader')] = requestCaller
    await this.platformServiceAccountClientService.request(
      {
        mutation: gql`
          mutation eventSyncEventSubscribers($data: [EventSubscriberCreateDto!]!) {
            eventSyncEventSubscribers(data: $data)
          }
        `,
        variables,
      },
      null,
      headers,
    )
  }
}
