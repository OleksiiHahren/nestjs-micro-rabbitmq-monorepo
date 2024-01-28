import { Module } from '@nestjs/common';
import { RabbitmqConnectorModule } from '@app/rabbitmq-connector';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/user.service';
import { UserConnectionsController } from './controllers/user-connections/user-connections.controller';
import { UserConnectionsService } from './services/user-connections/user-connections.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api-gateway/.env'
    }),
    RabbitmqConnectorModule.register('users')
  ],
  controllers: [UsersController, UserConnectionsController],
  providers: [UserService, UserConnectionsService]
})
export class ApiGatewayModule {}
