import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIotDto } from './dto/create-iot.dto';
import { UpdateIotDto } from './dto/update-iot.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';
import { take } from 'rxjs';

@Injectable()
export class IotService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createIotDto: CreateIotDto) {
    const { stationId, ...fields } = createIotDto;
    const insertData = await this.prismaService.dataPlueView.create({
      data: {
        ...fields,
        time: new Date(createIotDto.time),
        station: {
          connect: { id: stationId },
        },
      },
    });
    return insertData;
  }

  public async findAll() {
    // const pageSize = 100;
    const data = await this.prismaService.dataPlueView.findMany({
      orderBy: { time: 'desc' },
      include: { station: true },
    });
    return data;
  }

  async findOne(id: number) {
    const onlyOneData = await this.prismaService.dataPlueView.findUnique({
      where: { id },
      include: {
        station: true,
      },
    });
    if (!onlyOneData) {
      throw new NotFoundException('Não foi encontrado com esse id');
    }
    return onlyOneData;
  }

  update(id: number, updateIotDto: UpdateIotDto) {
    return `Update não está disponivel para teste`;
  }

  async remove(reading_id: number) {
    const removeData = await this.prismaService.dataPlueView.delete({
      where: { id: reading_id },
    });
    return removeData;
  }
}
