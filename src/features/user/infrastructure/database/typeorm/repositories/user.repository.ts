import { UserRepositoryContract } from '@/user/domain/contracts/repositories/user.repository.contract';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '@/user/infrastructure/database/typeorm/models/user.model';
import { Repository } from 'typeorm';
import { User } from '@/src/features/user/domain/entities/user.entity';
import { UserNotFoundWithIdException } from '@/src/features/user/domain/exceptions/user-not-found-with-id.exception';

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

  async update(id: string, user: User): Promise<User> {
    const { id: _, ...userData } = user;
    const existingUser = await this.repository.preload({ id, ...userData });

    if (!existingUser) throw new UserNotFoundWithIdException(id);

    return this.repository.save(existingUser);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
