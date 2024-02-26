import { UserConnectionEnum } from '../enum';
import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserConnectionCreateDto } from './user-connection-create.dto';

export class UserConnectionDto extends UserConnectionCreateDto {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  userWhoFollowsId: string;

  @ApiProperty({ enum: UserConnectionEnum })
  @IsEnum(UserConnectionEnum)
  status: UserConnectionEnum;
}
