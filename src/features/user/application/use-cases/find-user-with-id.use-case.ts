import { Injectable } from "@nestjs/common";
import { UserRepositoryContract } from "@/user/domain/contracts/repositories/user.repository.contract";
import { User } from "@/user/domain/entities/user.entity";
import { UserNotFoundWithIdException } from "@/user/domain/exceptions/user-not-found-with-id.exception";
import { UserResponseDto } from "../dto/user-response.dto";

@Injectable()
export class FindUserWithIdUseCase {
  constructor(private readonly repository: UserRepositoryContract) {}

  async execute(id: string): Promise<UserResponseDto> {
    const user: User | null = await this.repository.findById(id);
    if (!user) throw new UserNotFoundWithIdException(id);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
