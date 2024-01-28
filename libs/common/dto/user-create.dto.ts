import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UserCreateDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  icon: string;
}
