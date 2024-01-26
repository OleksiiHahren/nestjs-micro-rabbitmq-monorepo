import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { RabbitmqConnectorModule } from '@app/rabbitmq-connector';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api-gateway/.env'
    }),
    RabbitmqConnectorModule.register('users')
  ],
  controllers: [ApiGatewayController, UsersController],
  providers: [ApiGatewayService, UserService]
})
export class ApiGatewayModule {}
