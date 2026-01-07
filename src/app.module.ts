import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { IotService } from './iot/iot.service';
import { IotModule } from './iot/iot.module';
import { StationModule } from './station/station.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [PrismaModule, IotModule, StationModule, DataModule],
  controllers: [AppController],
  providers: [AppService, IotService],
})
export class AppModule {}
