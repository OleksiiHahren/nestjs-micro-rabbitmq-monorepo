import { Module } from '@nestjs/common';
import { NewsFeedController } from './news-feed.controller';
import { NewsFeedService } from './news-feed.service';

@Module({
  imports: [],
  controllers: [NewsFeedController],
  providers: [NewsFeedService],
})
export class NewsFeedModule {}
