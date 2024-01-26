import { Test, TestingModule } from '@nestjs/testing';
import { NewsFeedController } from './news-feed.controller';
import { NewsFeedService } from './news-feed.service';

describe('NewsFeedController', () => {
  let newsFeedController: NewsFeedController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NewsFeedController],
      providers: [NewsFeedService],
    }).compile();

    newsFeedController = app.get<NewsFeedController>(NewsFeedController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(newsFeedController.getHello()).toBe('Hello World!');
    });
  });
});
