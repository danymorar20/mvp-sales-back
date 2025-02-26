import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';
import { DatabaseProviders } from './infrastructure/database/providers';
import { UserService } from './user.service';
import { UserController } from './infrastructure/http-api/user.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { FindAllUsersUseCase } from './application/use-cases/find-all-users.use-case';
import { FindUserWithIdUseCase } from './application/use-cases/find-user-with-id.use-case';
import { FindUserWithEmailUseCase } from './application/use-cases/find-user-with-email.use-case';
import { UpdateUserUseCase } from './application/use-cases/update-user.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...DatabaseProviders,
    UserService,
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserWithIdUseCase,
    FindUserWithEmailUseCase,
    UpdateUserUseCase,
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
