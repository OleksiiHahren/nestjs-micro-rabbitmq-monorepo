import { NestFactory } from '@nestjs/core';
import { ReviewsModule } from './reviews.module';
import { RabbitmqConnectorService } from '@app/rabbitmq-connector';

async function bootstrap() {
  const app = await NestFactory.create(ReviewsModule);
  const rmqService = app.get<RabbitmqConnectorService>(
    RabbitmqConnectorService,
  );
  app.connectMicroservice(rmqService.getConfig('REVIEWS'));
}
bootstrap();
