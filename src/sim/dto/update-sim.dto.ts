import { PartialType } from '@nestjs/mapped-types';
import { CreateSimDto } from './create-sim.dto';

export class UpdateSimDto extends PartialType(CreateSimDto) {}
