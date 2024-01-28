import { UserConnectionDto } from '@app/common';
import { IsEnum } from 'class-validator';
import { UserConnectionEnum } from '../enum';

export namespace UpdateUserConnectionContract {
  export class Request {
    @IsEnum(UserConnectionEnum)
    status: UserConnectionEnum;
  }

  export class Response extends UserConnectionDto {}

  export const topic = 'user-connection.update';
}
