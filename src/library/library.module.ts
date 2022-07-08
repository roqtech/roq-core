import { Module } from '@nestjs/common'
import { ParseUUIDStringPipe } from '../library/pipes'
import { JsonObjectScalar } from '../library/scalars'
import { UtilityService } from '../library/services'
@Module({
  imports: [],
  providers: [UtilityService, JsonObjectScalar, ParseUUIDStringPipe],
  exports: [UtilityService],
  controllers: [],
})
export class LibraryModule {}
