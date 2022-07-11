import { Module } from '@nestjs/common'
import { PlatformClientModule } from '../platform-client.module'
import { PlatformNotificationClientService } from './services'

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformNotificationClientService],
  exports: [PlatformNotificationClientService],
})
export class PlatformNotificationClientModule {}
