import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from '@/user/domain/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() params: CreateUserDto,
  ): Promise<Omit<User, 'password'>> {
    return this.userService.createUser(params);
  }
}
