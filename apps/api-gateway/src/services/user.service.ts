import { Injectable } from '@nestjs/common';
import { UserCreateContract, UserCreateDto } from '@app/common';
import { RMQService } from 'nestjs-rmq';

@Injectable()
export class UserService {
  constructor(private readonly usersService: RMQService) {}

  async createUser(dto: UserCreateContract.Request): Promise<UserCreateContract.Response> {
    const user = await this.usersService.send<
      UserCreateContract.Request,
      UserCreateContract.Response
    >(UserCreateContract.topic, dto);
    return user;
  }
}
