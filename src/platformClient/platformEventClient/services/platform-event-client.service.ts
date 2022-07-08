import { Injectable } from '@nestjs/common'
import { triggerEventMutation } from '../graphql/mutation'
import { TriggerEventMutationArgs } from '../types'
import { PlatformServiceAccountClientService } from '../../services'

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
    )
  }
}
