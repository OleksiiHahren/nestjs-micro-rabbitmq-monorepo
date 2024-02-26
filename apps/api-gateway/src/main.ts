import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const result = await app.startAllMicroservices();
  const config = new DocumentBuilder()
    .setTitle('NestJS RabbitMQ microservices')
    .setDescription('SQRS pattern in NestJS microservices code skeleton')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app
    .listen(3000)
    .then(() => console.log(`api gateway listen on port 3000`));
}
bootstrap();
