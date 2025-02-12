import { Global, Module } from '@nestjs/common';
import { UUIDModule } from './infrastructure/uuid/uuid.module';
import { IdGeneratorServiceProvider } from './provider';

@Global()
@Module({
  providers: [UUIDModule, IdGeneratorServiceProvider],
  exports: [IdGeneratorServiceProvider],
})
export class IdGeneratorModule {}
