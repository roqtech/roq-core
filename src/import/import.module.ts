import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ImportConsole } from 'src/import/consoles';
import { ImportService } from 'src/import/services';
import { Logger } from 'src/logger/services';
import { PlatformClientModule } from 'src/platformClient';

@Module({
  imports: [PlatformClientModule],
  providers: [ImportConsole, ImportService, Logger],
  exports: [ImportConsole],
  controllers: [],
})
export class ImportModule {}
