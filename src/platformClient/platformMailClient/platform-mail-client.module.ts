import { Module } from '@nestjs/common'
import { PlatformClientModule } from '../platform-client.module'
import { PlatformMailClientService } from '../platformMailClient/services'

@Module({
  imports: [PlatformClientModule],
  providers: [PlatformMailClientService],
  exports: [PlatformMailClientService],
})
export class PlatformMailClientModule {}
