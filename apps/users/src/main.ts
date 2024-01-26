import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(process.env.PORT);
  Logger.log(`🚀 Users is running on: http://localhost:${process.env.PORT}`);
}

bootstrap();
