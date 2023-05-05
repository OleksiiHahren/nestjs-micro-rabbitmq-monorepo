import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { RabbitmqConnectorService } from '@app/rabbitmq-connector';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  const rmqService = app.get<RabbitmqConnectorService>(
    RabbitmqConnectorService,
  );
  app.connectMicroservice(rmqService.getConfig('USERS'));
}
bootstrap();
