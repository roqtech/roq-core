import { Module } from '@nestjs/common';
import { Logger } from 'src/logger/services';
import { PlatformClientModule } from 'src/platformClient';
import { PlatformUserClientService } from 'src/platformClient/platformUserClient/services';

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformUserClientService, Logger],
  exports: [PlatformUserClientService],
})
export class PlatformUserClientModule {}
