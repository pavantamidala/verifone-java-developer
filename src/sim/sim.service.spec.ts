import { Test, TestingModule } from '@nestjs/testing';
import { SimService } from './sim.service';

describe('SimService', () => {
  let service: SimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimService],
    }).compile();

    service = module.get<SimService>(SimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
