import { Injectable } from '@nestjs/common';
import { CreateUserUseCase } from './application/use-cases/create-user.use-case';
import { UserDataDto } from './application/dto/user-data.dto';
import { UserResponseDto } from './application/dto/user-response.dto';
import { FindAllUsersUseCase } from './application/use-cases/find-all-users.use-case';
import { FindUserWithIdUseCase } from './application/use-cases/find-user-with-id.use-case';
import { FindUserWithEmailUseCase } from './application/use-cases/find-user-with-email.use-case';

@Injectable()
export class UserService {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly findUserByIdUseCase: FindUserWithIdUseCase,
    private readonly findUserByEmailUseCase: FindUserWithEmailUseCase,
  ) { }

  async createUser(userData: UserDataDto): Promise<UserResponseDto> {
    return await this.createUserUseCase.execute(userData);
  }

  async findAllUsers(): Promise<UserResponseDto[]> {
    return await this.findAllUsersUseCase.execute();
  }

  async findUserById(id: string): Promise<UserResponseDto> {
    return await this.findUserByIdUseCase.execute(id);
  }

  async findUserByEmail(email: string): Promise<UserResponseDto> {
    return await this.findUserByEmailUseCase.execute(email);
  }
}
