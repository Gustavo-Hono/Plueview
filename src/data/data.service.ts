import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { CreateDatumDto } from './dto/create-datum.dto';

@Injectable()
export class DataService {
  constructor(private readonly prisma: PrismaService) {}

  /* =========================
     CREATE
  ========================= */
  async create(dto: CreateDatumDto) {
    return this.prisma.weatherData.create({
      data: {
        umidade: dto.umidade,
        temperatura: dto.temperatura,
        velocidadeVento: dto.velocidadeVento,
        direcaoVento: dto.direcaoVento,
        quantidadeChuva: dto.quantidadeChuva,
        dataMedicao: dto.dataMedicao
          ? new Date(dto.dataMedicao)
          : undefined,

        station: {
          connect: { id: dto.stationId },
        },
      },
    });
  }

  /* =========================
     READ ALL
  ========================= */
  async findAll() {
    return this.prisma.weatherData.findMany({
      orderBy: {
        dataMedicao: 'desc',
      },
      include: {
        station: true,
      },
    });
  }

  /* =========================
     READ ONE
  ========================= */
  async findOne(id: number) {
    const data = await this.prisma.weatherData.findUnique({
      where: { id },
      include: {
        station: true,
      },
    });

    if (!data) {
      throw new NotFoundException(`WeatherData ${id} não encontrado`);
    }

    return data;
  }

  /* =========================
     UPDATE
  ========================= */
  async update(id: number, dto: UpdateDatumDto) {
    await this.findOne(id); // garante que existe

    return this.prisma.weatherData.update({
      where: { id },
      data: {
        umidade: dto.umidade,
        temperatura: dto.temperatura,
        velocidadeVento: dto.velocidadeVento,
        direcaoVento: dto.direcaoVento,
        quantidadeChuva: dto.quantidadeChuva,
        dataMedicao: dto.dataMedicao
          ? new Date(dto.dataMedicao)
          : undefined,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.weatherData.delete({
      where: { id },
    });
  }
}
