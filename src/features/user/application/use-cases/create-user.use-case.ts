import { IdGeneratorServiceContract } from '@/id-generator-service/domain/contract/id-generator-service.contract';
import { HashServiceContract } from '@/hash-service/domain/contracts/hash-service.contract';
import { UserRepositoryContract } from '@/user/domain/contracts/repositories/user.repository.contract';
import { User } from '@/user/domain/entities/user.entity';
import { UserDataDto } from '@/user/application/dto/user-data.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepositoryContract,
    private readonly idGeneratorService: IdGeneratorServiceContract,
    private readonly hashService: HashServiceContract,
  ) {}

  async execute(userData: UserDataDto): Promise<Omit<User, 'password'>> {
    const now = new Date();
    const user: User = {
      id: this.idGeneratorService.generateV4().value,
      name: userData.name,
      lastName: userData.lastName,
      phone: userData.phone,
      email: userData.email,
      password: (await this.hashService.hash(userData.password)).value,
      createdAt: now,
      updatedAt: now,
    };
    const userCreated = await this.userRepository.create(user);
    const { password, ...userWithoutPassword } = userCreated;
    return userWithoutPassword;
  }
}
