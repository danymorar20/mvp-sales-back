import { Injectable } from "@nestjs/common";
import { UserRepositoryContract } from "@/user/domain/contracts/repositories/user.repository.contract";
import { UpdateUserDto } from "@/user/application/dto/update-user.dto";
import { UserResponseDto } from "@/user/application/dto/user-response.dto";
import { UserNotFoundWithIdException } from "@/user/domain/exceptions/user-not-found-with-id.exception";

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryContract) { }

  async execute(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(id);
    if (!user) throw new UserNotFoundWithIdException(id);

    const newUser = {
      id: user.id,
      name: updateUserDto.name || user.name,
      lastName: updateUserDto.lastName || user.lastName,
      phone: updateUserDto.phone || user.phone,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: new Date(),
    }

    const userUpdated = await this.userRepository.update(id, newUser);

    const { password, ...userWithoutPassword } = userUpdated;
    return userWithoutPassword as UserResponseDto;
  }
}
