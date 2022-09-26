"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSingleEntityLoader = void 0;
const DataLoader = require("dataloader");
class BaseSingleEntityLoader {
    constructor(moduleRef) {
        this.moduleRef = moduleRef;
        this.relationProperty = 'id';
    }
    generateDataLoader(repository) {
        return new DataLoader(async (query) => {
            const ids = query.reduce((acc, cur) => [...acc, cur.filter[this.relationProperty].equalTo], []);
            const data = await repository
                .buildSelectQuery({
                fields: query
                    .reduce((acc, cur) => [...acc, ...cur.fields], [])
                    .filter((field, i, arr) => arr.findIndex((f) => f === field) === i),
                filter: { [this.relationProperty]: { valueIn: ids } },
            })
                .getMany();
            return Promise.resolve(ids.map((id) => data.find((record) => record[this.relationProperty] === id)));
        });
    }
}
exports.BaseSingleEntityLoader = BaseSingleEntityLoader;
