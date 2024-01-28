import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { UserCreateContract } from '@app/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  createUser(
    @Body() dto: UserCreateContract.Request
  ): Promise<UserCreateContract.Response> {
    return this.userService.createUser(dto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {}
}
