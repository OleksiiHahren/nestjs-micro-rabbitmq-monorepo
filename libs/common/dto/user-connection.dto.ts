import { UserDto } from './user.dto';
import { UserConnectionEnum } from '../enum';
import { IsEnum } from 'class-validator';

export class UserConnectionDto {
  userFollowed: UserDto;

  @IsEnum(UserConnectionEnum)
  status: UserConnectionEnum;
}
