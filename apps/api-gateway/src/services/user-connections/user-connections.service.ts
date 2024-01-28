import { Injectable } from '@nestjs/common';
import { RMQService } from 'nestjs-rmq';
import {
  CreateUserConnectionContract,
  UpdateUserConnectionContract
} from '@app/common';

@Injectable()
export class UserConnectionsService {
  constructor(private readonly rmqService: RMQService) {}

  async createConnection(
    dto: CreateUserConnectionContract.Request
  ): Promise<CreateUserConnectionContract.Response> {
    return this.rmqService.send<
      CreateUserConnectionContract.Request,
      CreateUserConnectionContract.Response
    >(CreateUserConnectionContract.topic, dto);
  }

  async updateStatus(
    dto: UpdateUserConnectionContract.Request
  ): Promise<UpdateUserConnectionContract.Response> {
    return this.rmqService.send<
      UpdateUserConnectionContract.Request,
      UpdateUserConnectionContract.Response
    >(UpdateUserConnectionContract.topic, dto);
  }
}
