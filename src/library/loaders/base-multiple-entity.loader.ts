import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { BaseRepository } from 'src/library/repositories';

import { ArrayLoaderResponseInterface, QueryInterface } from '../interfaces';

@Injectable({ scope: Scope.REQUEST })
export class BaseMultipleEntityLoader<T> {
  generateDataLoader(repository: BaseRepository<T>, relationProperty: string): DataLoader<QueryInterface,
    ArrayLoaderResponseInterface<T>> {
      return new DataLoader<QueryInterface,
      ArrayLoaderResponseInterface<T>>(
      async (query: QueryInterface[]) => {
        const ids = query.reduce(
          (acc, cur) => [...acc, cur.filter[relationProperty].equalTo],
          []
        );
        const q = {
          limit: query[0].limit,
          offset: query[0].offset,
          fields: query
            .reduce((acc, cur) => [...acc, ...cur.fields], [])
            .filter((field, i, arr) => arr.findIndex((f) => f === field) === i),
          filter: {
            ...query?.[0].filter,
            [relationProperty]: {
              valueIn: ids,
            }
          }
        };
        return repository.getLoaderEntitiesAndCount(ids, relationProperty, q);
      },
    );
  }
}
