import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';
import { DatabaseProviders } from './infrastructure/database/providers';
import { UserService } from './user.service';
import { UserController } from './infrastructure/http-api/user.controller';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [...DatabaseProviders, UserService, CreateUserUseCase],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
