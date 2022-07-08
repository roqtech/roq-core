import { Module } from '@nestjs/common'
import { Logger } from '../../logger/services'
import { PlatformClientModule } from '../platform-client.module'
import { PlatformUserClientService } from './services'

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformUserClientService, Logger],
  exports: [PlatformUserClientService],
})
export class PlatformUserClientModule {}
