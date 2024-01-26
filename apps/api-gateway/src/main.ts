import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const result = await app.startAllMicroservices();
  console.log(result);
  await app
    .listen(3000)
    .then(() => console.log(`api gateway listen on port 3000`));
}
bootstrap();
