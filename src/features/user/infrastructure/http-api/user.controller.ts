import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '@/user/user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserResponseDto } from './dtos/user-response.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<UserResponseDto[]> {
    return await this.userService.findAllUsers();
  }

  @Get('id/:id')
  async findUserById(@Param('id') id: string): Promise<UserResponseDto> {
    return await this.userService.findUserById(id);
  }

  @Get('email/:email')
  async findUserByEmail(@Param('email') email: string): Promise<UserResponseDto> {
    return await this.userService.findUserByEmail(email);
  }

  @Post()
  async createUser(
    @Body() params: CreateUserDto,
  ): Promise<UserResponseDto> {
    return await this.userService.createUser(params);
  }

  @Put('id/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserResponseDto> {
    return await this.userService.updateUser(id, updateUserDto);
  }
}
