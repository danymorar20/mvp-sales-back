import { Injectable } from "@nestjs/common";
import { UserRepositoryContract } from "@/user/domain/contracts/repositories/user.repository.contract";
import { User } from "@/user/domain/entities/user.entity";
import { UserNotFoundWithIdException } from "@/user/domain/exceptions/user-not-found-with-id.exception";

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepositoryContract) {}

  async execute(userId: string): Promise<void> {
    const user: User | null = await this.userRepository.findById(userId);
    if (!user) throw new UserNotFoundWithIdException(userId);
    await this.userRepository.delete(userId);
  }
}