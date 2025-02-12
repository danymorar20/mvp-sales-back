import { Injectable } from '@nestjs/common';
import { UserRepositoryContract } from '@/user/domain/contracts/repositories/user.repository.contract';
import { User } from '@/user/domain/entities/user.entity';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepositoryContract) { }

  async execute(): Promise<Omit<User, 'password'>[]> {
    const users = await this.userRepository.findAll();
    return users.map(({ password, ...userWithoutPassword }) => userWithoutPassword);
  }
}
