import { Module } from '@nestjs/common'
import { Logger } from '../../logger'
import { PlatformClientModule } from '../platform-client.module'
import { PlatformSpaceClientService } from '../platformSpaceClient'

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformSpaceClientService, Logger],
  exports: [PlatformSpaceClientService],
})
export class PlatformSpaceClientModule {}
