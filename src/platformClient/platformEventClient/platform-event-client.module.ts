import { Module } from '@nestjs/common'
import { PlatformClientModule } from 'src/platformClient'
import { PlatformEventClientService } from 'src/platformClient/platformEventClient/services'

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformEventClientService],
  exports: [PlatformEventClientService],
})
export class PlatformEventClientModule {}
