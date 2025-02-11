import { Global, Module } from '@nestjs/common';
import { BcryptModule } from './infrastructure/bcrypt/bcrypt.module';
import { HashServiceProvider } from './provider';

@Global()
@Module({
  providers: [BcryptModule, HashServiceProvider],
  exports: [HashServiceProvider]
})
export class HashServiceModule {}
