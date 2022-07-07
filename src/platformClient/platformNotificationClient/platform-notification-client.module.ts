import { Module } from '@nestjs/common';
import { PlatformClientModule } from '@src/platformClient';
import { PlatformNotificationClientService } from '@src/platformClient/platformNotificationClient/services';

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformNotificationClientService],
  exports: [PlatformNotificationClientService],
})
export class PlatformNotificationClientModule {}
