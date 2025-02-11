import { Module } from '@nestjs/common';
import { UUIDService } from './uuid.service';
import { IdGeneratorServiceContract } from '@/id-generator-service/domain/contract/id-generator-service.contract';

@Module({
  providers: [UUIDService],
  exports: [IdGeneratorServiceContract],
})
export class UUIDModule {}
