import { UserConnectionDto } from '@app/common';
import { IsEnum } from 'class-validator';
import { UserConnectionEnum } from '../enum';
import { ApiProperty } from '@nestjs/swagger';

export namespace UpdateUserConnectionContract {
  export class Request {
    @ApiProperty({ enum: UserConnectionEnum })
    @IsEnum(UserConnectionEnum)
    status: UserConnectionEnum;
  }

  export class Response extends UserConnectionDto {}

  export const topic = 'user-connection.update';
}
