import { IsDateString, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateStation {

  @IsString()
  name: string;

  @IsString()
  macAddress: string;

}
