import { ApolloClient, createHttpLink, from, InMemoryCache, MutationOptions, QueryOptions } from '@apollo/client/core';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import fetcher from 'isomorphic-fetch';
import { ApolloClientConfigType } from 'src/apolloClient/types';

@Injectable()
export class ApolloClientService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected readonly apolloClient: any;
  protected uri: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apollo: any;

  constructor(
    protected config: ApolloClientConfigType,
    protected configService: ConfigService,
  ) {
    const contexts = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let headers: any = {};
    if (config.headers) {
      headers = { ...headers, ...config.headers };
    }
    this.uri = `${config.host}${config.endpoint ? config.endpoint : '/graphql'}`;
    const httpLink = createHttpLink({
      uri: this.uri,
      fetchOptions: {
        fetch: fetcher,
      },
      headers,
    });

    contexts.push(httpLink);

    this.apolloClient = new ApolloClient({
      link: from(contexts),
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          fetchPolicy: 'network-only',
        },
      },
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async request<T>(request: QueryOptions | MutationOptions, responseKey?: string, headers: any = {}): Promise<T> {
    if (request.context) {
      if (!request.context.headers) {
        request.context = { ...request.context, headers: {} };
      }
    } else {
      request.context = { headers: {} };
    }
    request.context.headers = { ...request.context.headers, ...headers };
    if ('query' in request && responseKey) {
      const {
        data: { [responseKey]: response },
      } = await this.apolloClient.query(request);
      return response;
    } else if ('mutation' in request && responseKey) {
      const {
        data: { [responseKey]: response },
      } = await this.apolloClient.mutate(request);
      return response;
    } else if ('query' in request && !responseKey) {
      return this.apolloClient.query(request);
    } else if ('mutation' in request && !responseKey) {
      return this.apolloClient.mutate(request);
    }
  }
}
