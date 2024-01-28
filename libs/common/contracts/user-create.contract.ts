import {
  UserCreateDto,
  UserDto
} from '@app/common';

export namespace UserCreateContract {
  export class Request extends UserCreateDto {}

  export class Response extends UserDto {}

  export const topic = 'users.create';
}
