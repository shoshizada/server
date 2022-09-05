import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.model';

@Controller('location')
export class LocationController {
    constructor(private locationService: LocationService) { }
    @Post()
    signup(@Body() newLocation: Location) {
        try {
          const result = this.locationService.addLocation(newLocation);
          return result;
        } catch (error) {
           console.log(error);
        }
    }
    @Get()
    getAll() {
        try {
           return this.locationService.getAll()
        } catch (error) {
                 console.log(error);
        }
    }

    @Get('/:id')
    getByID(@Param('id') id: string) {
        try {
           return this.locationService.getByID(id)
        } catch (error) {
                console.log(error); 
        }
    }

    @Delete('/:id')
    delete(@Param('id') _id: string) {

        try {
            return this.locationService.deleteLocation(_id)
        } catch (error) {
                 console.log(error);
        }
        
    }

    @Put('/:id')
    update(@Param('id') _id: string, @Body() updateLocation: Location) {
        console.log(_id)
        try {
                 const result= this.locationService.updateLocation(_id, updateLocation);
                 return result;
        } catch (error) {
                 console.log(error);
        }
   
    }
}

