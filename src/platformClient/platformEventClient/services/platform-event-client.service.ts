import { Injectable } from '@nestjs/common';
import { triggerEventMutation } from 'src/platformClient/platformEventClient/graphql/mutation';
import { TriggerEventMutationArgs } from 'src/platformClient/platformEventClient/types';
import { PlatformServiceAccountClientService } from 'src/platformClient/services';

@Injectable()
export class PlatformEventClientService {
  constructor(private readonly platformServiceAccountClientService: PlatformServiceAccountClientService) {}

  async trigger(event: TriggerEventMutationArgs): Promise<string> {
    return this.platformServiceAccountClientService.request<string>(
      {
        mutation: triggerEventMutation,
        variables: {
          event,
        },
      },
      'triggerEvent',
    );
  }
}
