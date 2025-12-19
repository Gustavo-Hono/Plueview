import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StationService } from './station.service';
import { UpdateStationDto } from './dto/update-station.dto';
import { CreateStation } from './dto/create-station.dto';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  createStation(@Body() createStationDto: CreateStation) {
    console.log("Post station chamado")
    return this.stationService.createStation(createStationDto);
  }

  @Get()
  findAll() {
    console.log("Chamado o findAll")
    return this.stationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log("Chamado o One")
    return this.stationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationDto: UpdateStationDto) {
    return this.stationService.update(+id, updateStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stationService.remove(+id);
  }
}
