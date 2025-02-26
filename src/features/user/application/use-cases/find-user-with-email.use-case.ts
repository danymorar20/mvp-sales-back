import { Injectable } from "@nestjs/common";
import { UserRepositoryContract } from "@/user/domain/contracts/repositories/user.repository.contract";
import { User } from "@/user/domain/entities/user.entity";
import { UserNotFoundWithIdException } from "@/user/domain/exceptions/user-not-found-with-id.exception";
import { UserResponseDto } from "../dto/user-response.dto";

@Injectable()
export class FindUserWithEmailUseCase {
  constructor(private readonly repository: UserRepositoryContract) {}

  async execute(email: string): Promise<UserResponseDto> {
    const user: User | null = await this.repository.findByEmail(email);
    if (!user) throw new UserNotFoundWithIdException(email);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
