import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateSimDto {
  @ApiProperty()
  @IsNumber()
  simCardNo: number;

  @ApiProperty()
  @IsNumber()
  @IsPhoneNumber()
  mobileNo: number;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsNumber()
  expiryDate: number;

  @ApiProperty()
  @IsString()
  stateOfRegistration: string;

  @ApiProperty()
  @IsBoolean()
  kyc: boolean;

  @ApiProperty()
  @IsBoolean()
  telecomProvider: string;

  @ApiProperty()
  @IsString()
  fullName: string;
}
