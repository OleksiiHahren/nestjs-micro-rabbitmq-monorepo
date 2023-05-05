import { Test, TestingModule } from '@nestjs/testing';
import { RabbitmqConnectorService } from './rabbitmq-connector.service';

describe('RabbitmqConnectorService', () => {
  let service: RabbitmqConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RabbitmqConnectorService],
    }).compile();

    service = module.get<RabbitmqConnectorService>(RabbitmqConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
