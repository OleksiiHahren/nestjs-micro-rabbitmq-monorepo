import { NestFactory } from '@nestjs/core';
import { NewsFeedModule } from './news-feed.module';

async function bootstrap() {
  const app = await NestFactory.create(NewsFeedModule);
  await app.listen(3000);
}
bootstrap();
