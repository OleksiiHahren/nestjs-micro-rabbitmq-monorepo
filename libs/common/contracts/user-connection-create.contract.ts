import { UserConnectionCreateDto, UserConnectionDto } from '@app/common';

export namespace CreateUserConnectionContract {
  export class Request extends UserConnectionCreateDto {}

  export class Response extends UserConnectionDto {}

  export const topic = 'user-connection.create';
}
