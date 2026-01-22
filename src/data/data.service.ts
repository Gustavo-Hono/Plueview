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
    const data: any = {
      umidade: dto.umidade,
      temperatura: dto.temperatura,
      quantidadeChuva: dto.quantidadeChuva,
      latitude: dto.latitude,
      longitude: dto.longitude,
      station: {
        connect: { id: dto.stationId },
      },
    };

    if (dto.velocidadeVento !== undefined) {
      data.velocidadeVento = dto.velocidadeVento;
    }

    if (dto.direcaoVento !== undefined) {
      data.direcaoVento = dto.direcaoVento;
    }

    if (dto.dataMedicao) {
      data.dataMedicao = new Date(dto.dataMedicao);
    }

    return this.prisma.weatherData.create({ data });
  }

  /* =========================
     READ ALL
  ========================= */
  async findAll() {
    return this.prisma.weatherData.findMany({
      orderBy: {
        id: 'desc',
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
        ...(dto.umidade !== undefined && { umidade: dto.umidade }),
        ...(dto.temperatura !== undefined && { temperatura: dto.temperatura }),
        ...(dto.velocidadeVento !== undefined && {
          velocidadeVento: dto.velocidadeVento,
        }),
        ...(dto.direcaoVento !== undefined && {
          direcaoVento: dto.direcaoVento,
        }),
        ...(dto.quantidadeChuva !== undefined && {
          quantidadeChuva: dto.quantidadeChuva,
        }),
        ...(dto.latitude !== undefined && { latitude: dto.latitude }),
        ...(dto.longitude !== undefined && { longitude: dto.longitude }),
        ...(dto.dataMedicao !== undefined && {
          dataMedicao: new Date(dto.dataMedicao),
        }),
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
