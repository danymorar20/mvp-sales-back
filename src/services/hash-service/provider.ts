import { Provider } from '@nestjs/common';
import { HashServiceContract } from './domain/contracts/hash-service.contract';
import { BcryptService } from './infrastructure/bcrypt/bcrypt.service';

export const HashServiceProvider: Provider = {
  provide: HashServiceContract,
  useClass: BcryptService,
};
