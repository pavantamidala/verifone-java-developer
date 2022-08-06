import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsOptional,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsBoolean,
} from 'class-validator';
import { CreateSimDto } from './create-sim.dto';

export class UpdateSimDto extends PartialType(CreateSimDto) {
  @IsOptional()
  @ApiProperty()
  @IsNumber()
  simCardNo: number;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  @IsPhoneNumber()
  mobileNo: number;

  @IsOptional()
  @ApiProperty()
  @IsString()
  status: string;

  @IsOptional()
  @ApiProperty()
  @IsNumber()
  expiryDate: number;

  @IsOptional()
  @ApiProperty()
  @IsString()
  stateOfRegistration: string;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  kyc: boolean;

  @IsOptional()
  @ApiProperty()
  @IsBoolean()
  telecomProvider: string;

  @IsOptional()
  @ApiProperty()
  @IsString()
  fullName: string;
}
