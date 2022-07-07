import { Module } from '@nestjs/common';
import { PlatformClientModule } from '@src/platformClient';
import { PlatformMailClientService } from '@src/platformClient/platformMailClient/services';

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformMailClientService],
  exports: [PlatformMailClientService],
})
export class PlatformMailClientModule {}
