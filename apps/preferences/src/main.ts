import { NestFactory } from '@nestjs/core';
import { PreferencesModule } from './preferences.module';
import { RabbitmqConnectorService } from '@app/rabbitmq-connector';

async function bootstrap() {
  const app = await NestFactory.create(PreferencesModule);
  const rmqService = app.get<RabbitmqConnectorService>(
    RabbitmqConnectorService,
  );
  app.connectMicroservice(rmqService.getConfig('PREFERENCES'));
}
bootstrap();

