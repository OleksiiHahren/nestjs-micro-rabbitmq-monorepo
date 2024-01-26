import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsFeedService {
  getHello(): string {
    return 'Hello World!';
  }
}
