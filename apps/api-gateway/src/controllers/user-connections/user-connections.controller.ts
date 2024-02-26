import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import {
  CreateUserConnectionContract,
  UpdateUserConnectionContract, UserConnectionCreateDto, UserConnectionDto
} from '@app/common';
import { UserConnectionsService } from '../../services/user-connections/user-connections.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User connections')
@Controller('user-connections')
export class UserConnectionsController {
  constructor(private readonly userConnectionService: UserConnectionsService) {}

  @Post()
  @ApiBody({ type: UserConnectionCreateDto })
  @ApiResponse({
    status: 201,
    type: UserConnectionDto
  })
  createConnection(
    @Body() dto: CreateUserConnectionContract.Request
  ): Promise<CreateUserConnectionContract.Response> {
    return this.userConnectionService.createConnection(dto);
  }

  @Patch(':connectionId/status')
  updateConnectionStatus(
    @Param('connectionId') connectionId: string,
    @Body() dto: UpdateUserConnectionContract.Request
  ) {
    return this.userConnectionService.updateConnectionStatus(dto);
  }
}
