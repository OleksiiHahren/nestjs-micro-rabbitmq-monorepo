import { Test, TestingModule } from '@nestjs/testing';
import { PostgresqlConnectorService } from './postgresql-connector.service';

describe('PostgresqlConnectorService', () => {
  let service: PostgresqlConnectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostgresqlConnectorService],
    }).compile();

    service = module.get<PostgresqlConnectorService>(PostgresqlConnectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
