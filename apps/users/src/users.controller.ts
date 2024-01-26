import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from '@app/common';
import { UserDto } from '@app/common';
import { RMQRoute } from 'nestjs-rmq';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @RMQRoute('users.create')
  async create(dto: UserCreateDto): Promise<UserDto> {
    const res = this.usersService.create(dto);
    console.log(res, '<--------- response from user service')
    return res
  }
}
