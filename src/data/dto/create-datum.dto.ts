import { IsNumber, IsEnum, Min, IsInt, Max } from 'class-validator';
import { WindDirection } from '../enum/wind.direction';

export class CreateDatumDto {
  @IsNumber()
  @Min(0)
  umidade: number;

  @IsNumber()
  temperatura: number;

  @IsNumber()
  @Min(0)
  velocidadeVento: number;

  @IsEnum(WindDirection)
  direcaoVento: WindDirection;

  @IsNumber()
  @Min(0)
  quantidadeChuva: number;

  @IsInt()
  stationId: number;

  dataMedicao?: string;

  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude: number;
}
