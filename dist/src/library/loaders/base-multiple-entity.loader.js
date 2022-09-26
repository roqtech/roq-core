"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseMultipleEntityLoader = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const DataLoader = require("dataloader");
let BaseMultipleEntityLoader = class BaseMultipleEntityLoader {
    generateDataLoader(repository, relationProperty) {
        return new DataLoader(async (query) => {
            const ids = query.reduce((acc, cur) => [...acc, cur.filter[relationProperty].equalTo], []);
            const q = {
                limit: query[0].limit,
                offset: query[0].offset,
                fields: query
                    .reduce((acc, cur) => [...acc, ...cur.fields], [])
                    .filter((field, i, arr) => arr.findIndex((f) => f === field) === i),
                filter: Object.assign(Object.assign({}, query === null || query === void 0 ? void 0 : query[0].filter), { [relationProperty]: {
                        valueIn: ids,
                    } })
            };
            return repository.getLoaderEntitiesAndCount(ids, relationProperty, q);
        });
    }
};
BaseMultipleEntityLoader = tslib_1.__decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.REQUEST })
], BaseMultipleEntityLoader);
exports.BaseMultipleEntityLoader = BaseMultipleEntityLoader;
