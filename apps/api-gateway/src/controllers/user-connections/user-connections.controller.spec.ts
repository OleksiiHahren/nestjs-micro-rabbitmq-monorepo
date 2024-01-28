import { Test, TestingModule } from '@nestjs/testing';
import { UserConnectionsController } from './user-connections.controller';

describe('UserConnectionsController', () => {
  let controller: UserConnectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserConnectionsController],
    }).compile();

    controller = module.get<UserConnectionsController>(
      UserConnectionsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
