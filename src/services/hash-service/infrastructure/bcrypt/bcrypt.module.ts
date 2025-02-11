import { Module } from '@nestjs/common';
import { BcryptService } from './bcrypt.service';
import { HashServiceContract } from '@/hash-service/domain/contracts/hash-service.contract';

@Module({
  providers: [BcryptService],
  exports: [HashServiceContract],
})
export class BcryptModule {}
