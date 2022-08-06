import { Module } from '@nestjs/common';
import { SimService } from './sim.service';
import { SimController } from './sim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sim } from './entities/sim.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sim])],
  controllers: [SimController],
  providers: [SimService],
})
export class SimModule {}
