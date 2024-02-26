import { User } from '../../../apps/users/src/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UserConnectionCreateDto {
  @ApiProperty()
  userFollowedId: string;
  userWhoFollows?: User;
  userFollowed?: User;
}
