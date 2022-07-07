import { gql } from '@apollo/client/core';
import { Query, Resolver } from '@nestjs/graphql';
import { PlatformClientService, PlatformHttpClientService } from '../services';

@Resolver()
export class PlatformClientResolver {
  constructor(
    private readonly platformHttpClientService: PlatformHttpClientService,
    private readonly platformClientService: PlatformClientService
  ) {}

  @Query(() => String)
  async mailHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            mailHealthCheck
          }
        `,
      },
      'mailHealthCheck',
    );
    return JSON.stringify(response);
  }

  @Query(() => String)
  async searchHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            searchHealthCheck
          }
        `,
      },
      'searchHealthCheck',
    );

    return JSON.stringify(response);
  }

  @Query(() => String)
  async spaceHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            spaceHealthCheck
          }
        `,
      },
      'spaceHealthCheck',
    );

    return JSON.stringify(response);
  }

  @Query(() => String)
  async notificationHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            notificationHealthCheck
          }
        `,
      },
      'notificationHealthCheck',
    );

    return JSON.stringify(response);
  }

  @Query(() => String)
  async workflowHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            workflowHealthCheck
          }
        `,
      },
      'workflowHealthCheck',
    );

    return JSON.stringify(response);
  }

  @Query(() => String)
  async userHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            userHealthCheck
          }
        `,
      },
      'userHealthCheck',
    );

    return JSON.stringify(response);
  }

  @Query(() => String)
  async dataHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            dataHealthCheck
          }
        `,
      },
      'dataHealthCheck',
    );
    return JSON.stringify(response);
  }

  @Query(() => String)
  async contentHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            contentHealthCheck
          }
        `,
      },
      'contentHealthCheck',
    );

    return JSON.stringify(response);
  }

  @Query(() => String)
  async chatHealthCheck(): Promise<string> {
    const response = await this.platformClientService.request(
      {
        query: gql`
          {
            chatHealthCheck
          }
        `,
      },
      'chatHealthCheck',
    );

    return JSON.stringify(response);
  }
}
