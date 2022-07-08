import { Module } from '@nestjs/common'
import { Logger } from 'src/logger/services'
import { PlatformClientModule } from 'src/platformClient'
import { PlatformSpaceClientService } from 'src/platformClient/platformSpaceClient/services'

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformSpaceClientService, Logger],
  exports: [PlatformSpaceClientService],
})
export class PlatformSpaceClientModule {}
