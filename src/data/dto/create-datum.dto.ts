import {
  IsNumber,
  IsEnum,
  Min,
  Max,
  IsInt,
  IsOptional,
  IsISO8601
} from 'class-validator';

import { Type } from 'class-transformer';
import { WindDirection } from '../enum/wind.direction';

export class CreateDatumDto {

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  umidade: number;

  @Type(() => Number)
  @IsNumber()
  temperatura: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  velocidadeVento?: number;

  @IsOptional()
  @IsEnum(WindDirection)
  direcaoVento?: WindDirection;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  quantidadeChuva: number;

  @Type(() => Number)
  @IsInt()
  stationId: number;

  @IsOptional()
  @IsISO8601()
  dataMedicao?: string;

  @Type(() => Number)
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @Type(() => Number)
  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;
}