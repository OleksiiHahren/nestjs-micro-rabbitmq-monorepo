import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { RabbitmqConnectorService } from '@app/rabbitmq-connector';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const rabbitmqService = app.get<RabbitmqConnectorService>(
    RabbitmqConnectorService,
  );
  app.connectMicroservice(rabbitmqService.getConfig('USERS'));
  app.connectMicroservice(rabbitmqService.getConfig('REVIEWS'));
  app.connectMicroservice(rabbitmqService.getConfig('PREFERENCES'));
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
