"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApolloClientService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@apollo/client/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const isomorphic_fetch_1 = require("isomorphic-fetch");
const types_1 = require("../../apolloClient/types");
let ApolloClientService = class ApolloClientService {
    constructor(config, configService) {
        this.config = config;
        this.configService = configService;
        const contexts = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let headers = {};
        if (config.headers) {
            headers = Object.assign(Object.assign({}, headers), config.headers);
        }
        this.uri = `${config.host}${config.endpoint ? config.endpoint : ''}`;
        const httpLink = (0, core_1.createHttpLink)({
            uri: this.uri,
            fetchOptions: {
                fetch: isomorphic_fetch_1.default,
            },
            headers,
        });
        contexts.push(httpLink);
        this.apolloClient = new core_1.ApolloClient({
            link: (0, core_1.from)(contexts),
            cache: new core_1.InMemoryCache(),
            defaultOptions: {
                query: {
                    fetchPolicy: 'network-only',
                },
            },
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async request(request, responseKey, headers = {}) {
        if (request.context) {
            if (!request.context.headers) {
                request.context = Object.assign(Object.assign({}, request.context), { headers: {} });
            }
        }
        else {
            request.context = { headers: {} };
        }
        request.context.headers = Object.assign(Object.assign({}, request.context.headers), headers);
        if ('query' in request && responseKey) {
            const { data: { [responseKey]: response }, } = await this.apolloClient.query(request);
            return response;
        }
        else if ('mutation' in request && responseKey) {
            const { data: { [responseKey]: response }, } = await this.apolloClient.mutate(request);
            return response;
        }
        else if ('query' in request && !responseKey) {
            return this.apolloClient.query(request);
        }
        else if ('mutation' in request && !responseKey) {
            return this.apolloClient.mutate(request);
        }
    }
};
ApolloClientService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [types_1.ApolloClientConfigType,
        config_1.ConfigService])
], ApolloClientService);
exports.ApolloClientService = ApolloClientService;
