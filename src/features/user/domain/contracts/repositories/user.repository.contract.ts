import { User } from '@/user/domain/entities/user.entity';

export abstract class UserRepositoryContract {
  abstract create(user: User): Promise<User>;
  abstract findAll(): Promise<User[]>;
  // abstract findById(id: string): Promise<User | null>;
  // abstract findByEmail(email: string): Promise<User | null>;
  // abstract update(user: User): Promise<User>;
  // abstract delete(id: string): Promise<void>;
}
