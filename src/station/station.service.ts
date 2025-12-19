import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateStationDto } from './dto/update-station.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStation } from './dto/create-station.dto';

@Injectable()
export class StationService {

  constructor( private readonly prismaService: PrismaService) {}

  async createStation(createStationDto: CreateStation) {
      return await this.prismaService.station.create({
        data: {
          name: createStationDto.name,
          macAddress: createStationDto.macAddress,
        },
      });
    }

  public async findAll() {
    // const pageSize = 100;
    const data = await this.prismaService.station.findMany();
    return data;
  }

  async findOne(id: number) {
      const onlyOneData = await this.prismaService.station.findUnique({
        where: { id },
      include: { readings: true }
    });
      if (!onlyOneData) {
        throw new NotFoundException('Não foi encontrado com esse id uma STATION');
      }
      return onlyOneData;
    }

  async update(id: number, updateStationDto: UpdateStationDto) {
    await this.findOne(id);

  // 2. Realizamos a atualização
  return await this.prismaService.station.update({
    where: { id },
    data: updateStationDto,
  });
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
