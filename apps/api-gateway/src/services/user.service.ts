import { Injectable } from '@nestjs/common';
import { UserCreateDto } from '@app/common';
import { RMQService } from 'nestjs-rmq';

@Injectable()
export class UserService {
  constructor(private readonly usersService: RMQService) {}

  async createUser(dto: UserCreateDto) {
    const user = await this.usersService.send('users.create', dto);
    return user;
  }
}
