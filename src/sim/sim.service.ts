import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSimDto } from './dto/create-sim.dto';
import { UpdateSimDto } from './dto/update-sim.dto';
import { Sim } from './entities/sim.entity';

@Injectable()
export class SimService {
  constructor(@InjectRepository(Sim) private repo: Repository<Sim>) {}

  create(createSimDto: CreateSimDto) {
    const sim = this.repo.create(createSimDto);
    return this.repo.save(sim);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateSimDto: UpdateSimDto) {
    const sim = await this.findOne(id);

    if (!sim) {
      throw new NotFoundException('Sim Not Found');
    }
    Object.assign(sim, updateSimDto);
    return this.repo.save(sim);
  }

  async remove(id: number) {
    const sim = await this.findOne(id);

    if (!sim) {
      throw new NotFoundException('Sim Not Found');
    }
    return this.repo.remove(sim);
  }

  toRenew() {
    const now = new Date();
    const startOfDay: any = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    );
    const timestamp: any = startOfDay / 1000;

    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 30);
    const after30DaysDate = +new Date(todayDate);
    return this.repo
      .createQueryBuilder('sim')
      .where(`sim.expiryDate BETWEEN '${timestamp}' AND '${after30DaysDate}'`)
      .getMany();
  }
}
