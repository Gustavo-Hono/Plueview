import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IotService } from './iot.service';
import { CreateIotDto } from './dto/create-iot.dto';
import { UpdateIotDto } from './dto/update-iot.dto';

@Controller('iot')
export class IotController {
  constructor(private readonly iotService: IotService) {}

  @Post()
  create(@Body() createIotDto: CreateIotDto) {
    console.log("Post chamado")
    return this.iotService.create(createIotDto);
  }


  @Get()
  findAll() {
    console.log("FindAll chamado")
    return this.iotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log("FindOne chamado")
    return this.iotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateIotDto: UpdateIotDto) {
    return this.iotService.update(+id, updateIotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log("deletado")
    return this.iotService.remove(+id);
  }
}
