import { Controller, Get } from '@nestjs/common';
import { NewsFeedService } from './news-feed.service';

@Controller()
export class NewsFeedController {
  constructor(private readonly newsFeedService: NewsFeedService) {}

  @Get()
  getHello(): string {
    return this.newsFeedService.getHello();
  }
}
