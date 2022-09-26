"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportConsole = void 0;
const tslib_1 = require("tslib");
const config_1 = require("@nestjs/config");
const core_1 = require("@apollo/client/core");
const csv = require("csvtojson");
const fs = require("fs");
const nestjs_console_1 = require("nestjs-console");
const path = require("path");
const services_1 = require("../../import/services");
const enums_1 = require("../../logger/enums");
const services_2 = require("../../logger/services");
const services_3 = require("../../platformClient/services");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let ImportConsole = class ImportConsole {
    constructor(logger, importService, configService, platformServiceAccountClientService) {
        this.logger = logger;
        this.importService = importService;
        this.configService = configService;
        this.platformServiceAccountClientService = platformServiceAccountClientService;
    }
    async importData(options) {
        let flush = false;
        if (options && Object.keys(options).includes('flush') && options.flush === true) {
            flush = true;
        }
        let connection;
        try {
            connection = (0, typeorm_1.getConnection)();
        }
        catch (error) {
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: 'Could not establish connection getConnection()',
            });
            try {
                connection = await (0, typeorm_1.createConnection)({
                    type: 'postgres',
                    url: this.configService.get('application.databaseUrl'),
                });
            }
            catch (error) {
                this.logger.log({
                    type: enums_1.LoggingTypeEnum.importData,
                    message: 'Could not establish connection createConnection()',
                });
                process.exit(1);
            }
        }
        const configuration = this.configService.get('application.importDataConfigs');
        this.logger.log({
            type: enums_1.LoggingTypeEnum.importData,
            message: 'Platform import seed configuration',
            data: {
                configuration,
            },
        });
        for (const source of configuration) {
            await this.importEntities(flush, connection, { source });
        }
    }
    async importEntities(flush, connection, { source, absolute = false }) {
        try {
            const directory = absolute ? source : path.join(process.cwd(), `/data/${source}`);
            if (!fs.existsSync(directory)) {
                return Promise.resolve();
            }
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
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
                data[entityName] = await csv({ flatKeys: true }).fromFile(path.join(directory, `${entityName}${extension}`));
            }
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
                message: 'Reading of files done',
            });
            await this.importService.importData(connection, data, flush);
        }
        catch (err) {
            this.logger.log({
                type: enums_1.LoggingTypeEnum.importData,
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
    async importEventSubscribers(eventSubscribers) {
        const eventConfigs = fs
            .readFileSync(path.join(process.cwd(), 'src', 'config', 'platform-events.json'))
            .toString('utf-8');
        const variables = {
            data: (eventSubscribers === null || eventSubscribers === void 0 ? void 0 : eventSubscribers.length) > 0 ? eventSubscribers : JSON.parse(eventConfigs),
        };
        const requestId = (0, uuid_1.v4)();
        const requestCaller = this.configService.get('application.appName');
        const headers = {};
        headers[this.configService.get('application.platform.requestIdHeader')] = requestId;
        headers[this.configService.get('application.platform.requestCallerHeader')] = requestCaller;
        await this.platformServiceAccountClientService.request({
            mutation: (0, core_1.gql) `
          mutation eventSyncEventSubscribers($data: [EventSubscriberCreateDto!]!) {
            eventSyncEventSubscribers(data: $data)
          }
        `,
            variables,
        }, null, headers);
    }
};
tslib_1.__decorate([
    (0, nestjs_console_1.Command)({
        command: 'import-entities',
        description: 'Seed data',
        options: [
            {
                required: false,
                flags: '--flush',
            },
        ],
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportConsole.prototype, "importData", null);
tslib_1.__decorate([
    (0, nestjs_console_1.Command)({
        command: 'import-event-subscribers',
        description: 'Importing event subscribers',
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", Promise)
], ImportConsole.prototype, "importEventSubscribers", null);
ImportConsole = tslib_1.__decorate([
    (0, nestjs_console_1.Console)(),
    tslib_1.__metadata("design:paramtypes", [services_2.Logger,
        services_1.ImportService,
        config_1.ConfigService,
        services_3.PlatformServiceAccountClientService])
], ImportConsole);
exports.ImportConsole = ImportConsole;
