import { IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @MaxLength(10)
  phone: string;
}
