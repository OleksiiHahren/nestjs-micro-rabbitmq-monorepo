import { Test, TestingModule } from '@nestjs/testing';
import { MongodbConnectorService } from './mongodb-connector.service';

describe('MongodbConnectorService', () => {
  let service: MongodbConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongodbConnectorService],
    }).compile();

    service = module.get<MongodbConnectorService>(MongodbConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
