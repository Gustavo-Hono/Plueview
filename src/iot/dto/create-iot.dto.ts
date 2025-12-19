import { IsDateString, IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateIotDto {
  @IsDateString() // Valida se é uma string de data válida (ISO 8601)
  time: string;

  @IsInt()
  battery: number;

  @IsNumber()
  @IsOptional()
  ConsumoPluviometro?: number;

  @IsNumber()
  @IsOptional()
  ConsumoVelocidadeVento?: number;
  
  @IsNumber()
  @IsOptional()
  ConsumoDirecaoVento?: number;
  
  @IsNumber()
  @IsOptional()
  ConsumoTemperatura?: number;
  
  @IsNumber()
  @IsOptional()
  ConsumoUmidade?: number;

  @IsInt()
  stationId: number
  
}
