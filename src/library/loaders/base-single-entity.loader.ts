import { ModuleRef } from '@nestjs/core';
import * as DataLoader from 'dataloader';
import { QueryInterface } from 'src/library/interfaces';
import { BaseRepository } from 'src/library/repositories';

export class BaseSingleEntityLoader<T> {
  protected readonly relationProperty = 'id';

  constructor(private readonly moduleRef: ModuleRef) {
  }

  generateDataLoader(repository: BaseRepository<T>): DataLoader<QueryInterface, T> {
    return new DataLoader<QueryInterface, T>(
      async (query: QueryInterface[]) => {
        const ids = query.reduce((acc, cur) => [...acc, cur.filter[this.relationProperty].equalTo], []);
        const data = await repository
          .buildSelectQuery({
            fields: query
              .reduce((acc, cur) => [...acc, ...cur.fields], [])
              .filter((field, i, arr) => arr.findIndex((f) => f === field) === i),
            filter: { [this.relationProperty]: { valueIn: ids } },
          })
          .getMany();
        return Promise.resolve(ids.map((id) => data.find((record: any) => record[this.relationProperty] === id)));
      },
    );
  }
}
