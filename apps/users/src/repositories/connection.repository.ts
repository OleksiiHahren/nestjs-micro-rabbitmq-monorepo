import { Repository, UpdateResult } from 'typeorm';
import { Connection } from '../entities/connection.entity';
import { EntityRepository } from 'nestjs-typeorm-custom-repository';
import { ConnectionStatusUpdateDto } from '../../../../libs/common/dto/connection-status-update.dto';
import { ConnectionCreateDto } from '../../../../libs/common/dto/connection-create.dto';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';

@EntityRepository(Connection)
export class ConnectionRepository extends Repository<Connection> {

  async createConnection(dto: ConnectionCreateDto) {
    const connection = await this.create();
    connection.consumerUser = dto.consumer;
    connection.producerUser = dto.producer;
    connection.lastInteraction = new Date();
    connection.status = 'pending';
    return await this.save(connection);
  }

  async findOneConnectionByProducer(userId: string): Promise<Connection> {
    return await this.findOneOrFail({
      where: {
        producerUser: {
          id: userId
        }
      },
      relations: ['producerUser']
    });
  }

  async findOneConnectionByConsumer(userId: string): Promise<Connection> {
    return await this.findOneOrFail({
      where: {
        consumerUser: {
          id: userId
        }
      },
      relations: ['consumerUser']
    });
  }

  async updateStatusOfConnection(
    id: string,
    dto: ConnectionStatusUpdateDto
  ): Promise<UpdateResult> {
    return this.update({ id }, { status: dto.status });
  }

  async deleteConnection(id: string): Promise<DeleteResult> {
    return this.delete({ id });
  }
}
