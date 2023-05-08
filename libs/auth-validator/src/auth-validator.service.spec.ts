import { Test, TestingModule } from '@nestjs/testing';
import { AuthValidatorService } from './auth-validator.service';

describe('AuthValidatorService', () => {
  let service: AuthValidatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthValidatorService],
    }).compile();

    service = module.get<AuthValidatorService>(AuthValidatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
