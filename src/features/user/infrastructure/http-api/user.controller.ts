import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from '@/user/domain/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<Omit<User, 'password'>[]> {
    return await this.userService.findAllUsers();
  }

  @Get('id/:id')
  async findUserById(@Param('id') id: string): Promise<Omit<User, 'password'>> {
    return await this.userService.findUserById(id);
  }

  @Post()
  async createUser(
    @Body() params: CreateUserDto,
  ): Promise<Omit<User, 'password'>> {
    return await this.userService.createUser(params);
  }
}
