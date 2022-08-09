import { Test, TestingModule } from '@nestjs/testing';
import { User1Controller } from './user1.controller';

describe('User1Controller', () => {
  let controller: User1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User1Controller],
    }).compile();

    controller = module.get<User1Controller>(User1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
