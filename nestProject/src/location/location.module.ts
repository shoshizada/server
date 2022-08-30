import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { LocationSchema } from './location.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Location', schema: LocationSchema}])],
  providers: [LocationService],
  controllers: [LocationController]
})
export class LocationModule {}
