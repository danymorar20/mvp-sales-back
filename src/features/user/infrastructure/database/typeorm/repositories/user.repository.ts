import { UserRepositoryContract } from '@/user/domain/contracts/repositories/user.repository.contract';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '@/user/infrastructure/database/typeorm/models/user.model';
import { Repository } from 'typeorm';
import { User } from '@/src/features/user/domain/entities/user.entity';

export class UserRepository implements UserRepositoryContract {
  constructor(
    @InjectRepository(UserModel)
    private readonly repository: Repository<UserModel>,
  ) {}

  async create(newUser: User): Promise<User> {
    return await this.repository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<User | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.repository.findOneBy({ email });
  }
}
