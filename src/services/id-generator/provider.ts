import { Provider } from '@nestjs/common';
import { IdGeneratorServiceContract } from './domain/contract/id-generator-service.contract';
import { UUIDService } from './infrastructure/uuid/uuid.service';

export const IdGeneratorServiceProvider: Provider = {
  provide: IdGeneratorServiceContract,
  useClass: UUIDService,
};
