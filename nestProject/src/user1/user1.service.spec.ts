import { Test, TestingModule } from '@nestjs/testing';
import { User1Service } from './user1.service';

describe('User1Service', () => {
  let service: User1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User1Service],
    }).compile();

    service = module.get<User1Service>(User1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
