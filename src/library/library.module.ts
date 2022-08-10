import { Module } from '@nestjs/common'
import { ParseUUIDStringPipe } from 'src/library/pipes'
import { DateScalar, JsonObjectScalar } from 'src/library/scalars'
import { UtilityService } from 'src/library/services'
@Module({
  imports: [],
  providers: [UtilityService, JsonObjectScalar, DateScalar, ParseUUIDStringPipe],
  exports: [UtilityService],
  controllers: [],
})
export class LibraryModule {}
