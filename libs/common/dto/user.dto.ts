import { UserCreateDto } from './user-create.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto extends UserCreateDto{
  @ApiProperty()
  @IsString()
  id: string;
}
