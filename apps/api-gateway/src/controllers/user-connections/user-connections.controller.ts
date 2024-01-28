import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import {
  CreateUserConnectionContract,
  UpdateUserConnectionContract
} from '@app/common';
import { UserConnectionsService } from '../../services/user-connections/user-connections.service';

@Controller('user-connections')
export class UserConnectionsController {
  constructor(private readonly userConnectionService: UserConnectionsService) {}

  @Post()
  createConnection(
    @Body() dto: CreateUserConnectionContract.Request
  ): Promise<CreateUserConnectionContract.Response> {
    return this.userConnectionService.createConnection(dto);
  }

  @Patch(':connectionId/status')
  updateStatus(
    @Param('connectionId') connectionId: string,
    @Body() dto: UpdateUserConnectionContract.Request
  ) {
    return this.userConnectionService.updateStatus(dto);
  }
}
