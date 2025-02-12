import { Injectable } from "@nestjs/common";
import { UserRepositoryContract } from "@/user/domain/contracts/repositories/user.repository.contract";
import { User } from "@/user/domain/entities/user.entity";
import { UserNotFoundWithIdException } from "@/user/domain/exceptions/user-not-found-with-id.exception";

@Injectable()
export class FindUserWithIdUseCase {
  constructor(private readonly repository: UserRepositoryContract) {}

  async execute(id: string): Promise<Omit<User, 'password'>> {
    const user = await this.repository.findById(id);
    if (!user) throw new UserNotFoundWithIdException(id);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
