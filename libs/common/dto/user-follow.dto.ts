import { IsString } from 'class-validator';

export class UserFollowDto {
  @IsString()
  userIdWhoFollow: string;
  @IsString()
  userIdForFollowing: string;
}
