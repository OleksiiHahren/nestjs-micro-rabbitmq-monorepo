import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { UserCreateContract, UserCreateDto, UserDto } from '@app/common';
import { UserService } from '../services/user.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('')
  @ApiBody({
    type: UserCreateDto
  })
  @ApiResponse({
    status: 201,
    type: UserDto
  })
  createUser(
    @Body() dto: UserCreateContract.Request
  ): Promise<UserCreateContract.Response> {
    return this.userService.createUser(dto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser();
  }
}
