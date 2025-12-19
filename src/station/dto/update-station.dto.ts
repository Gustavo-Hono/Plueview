import { PartialType } from '@nestjs/mapped-types';
import { CreateStation } from './create-station.dto';

export class UpdateStationDto extends PartialType(CreateStation) {}
