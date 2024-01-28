import { UserCreateDto } from './user-create.dto';
import { IsString } from 'class-validator';

export class UserDto extends UserCreateDto{
  @IsString()
  id: string;
}
