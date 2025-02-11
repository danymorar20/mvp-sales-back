import { Provider } from '@nestjs/common';
import { UserRepositoryContract } from '@/user/domain/contracts/repositories/user.repository.contract';
import { UserRepository } from './typeorm/repositories/user.repository';

export const DatabaseProviders: Provider[] = [
  {
    provide: UserRepositoryContract,
    useClass: UserRepository,
  },
];
