import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SimService } from './sim.service';
import { CreateSimDto } from './dto/create-sim.dto';
import { UpdateSimDto } from './dto/update-sim.dto';

@Controller('sim')
export class SimController {
  constructor(private readonly simService: SimService) {}

  @Post('add')
  create(@Body() createSimDto: CreateSimDto) {
    return this.simService.create(createSimDto);
  }

  @Get('toRenew')
  toRenew() {
    return this.simService.toRenew();
  }

  @Get('listall')
  findAll() {
    return this.simService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.simService.findOne(+id);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSimDto: UpdateSimDto) {
    return this.simService.update(+id, updateSimDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.simService.remove(+id);
  }
}
