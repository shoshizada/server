import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.model';

@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService) { }
    @Post()
    signup(@Body() newLocation: Location) {
        const result = this.locationService.addLocation(newLocation);
        return result
    }
    @Get()
    getAll() {
        return this.locationService.getAll()
    }
    @Get('/:id')
    getByID(@Param('id') id: string) {
        return this.locationService.getByID(id)
    }
    @Delete('/:id')
    delete(@Param('id') _id: string) {
        return this.locationService.deleteLocation(_id)
    }
    @Put('/:id')
    update(@Param('id') _id: string, @Body() updateLocation: Location) {
        console.log(_id)
        return this.locationService.updateLocation(_id, updateLocation)
    }
}

