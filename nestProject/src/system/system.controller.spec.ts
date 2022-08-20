import { Test, TestingModule } from '@nestjs/testing';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

describe('SystemController', () => {
  let systemController: SystemController;
   let systemService: SystemService;

  const mockSystemService ={
    
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemController],
      providers: [SystemService]
    }).overrideProvider(systemService).useValue(mockSystemService).compile();

    systemController = module.get<SystemController>(SystemController);
  });

  it('should be defined', () => {
    expect(systemController).toBeDefined();
  });
});
