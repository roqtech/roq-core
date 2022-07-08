import { Module } from '@nestjs/common'
import { PlatformClientModule } from '../platform-client.module'
import { PlatformEventClientService } from '../platformEventClient/services'

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformEventClientService],
  exports: [PlatformEventClientService],
})
export class PlatformEventClientModule {}
