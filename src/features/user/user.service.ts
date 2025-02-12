import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserDataDto } from './application/dto/user-data.dto';
import { User } from './domain/entities/user.entity';
import { FindAllUsersUseCase } from './application/use-cases/find-all-users.use-case';

@Injectable()
export class UserService {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
  ) { }

  async createUser(userData: UserDataDto): Promise<Omit<User, 'password'>> {
    return await this.createUserUseCase.execute(userData);
  }

  async findAllUsers(): Promise<Omit<User, 'password'>[]> {
    return await this.findAllUsersUseCase.execute();
  }
}
