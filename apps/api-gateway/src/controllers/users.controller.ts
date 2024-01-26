import {Body, Controller, Delete, Param, Post} from '@nestjs/common';
import { UserCreateDto } from '@app/common';
import { UserService } from '../services/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  createUser(@Body() dto: UserCreateDto) {
    return this.userService.createUser(dto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {}
}
