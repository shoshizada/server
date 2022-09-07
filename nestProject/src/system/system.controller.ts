import { Controller, Post, Body, Get, Delete, Put, Param  } from '@nestjs/common';
import {System} from './system.model';
import {SystemService} from './system.service';

@Controller('system')
export class SystemController {
      constructor(private systemService: SystemService) { }

  @Post()
   signup(@Body() newSystem: System) {
     try {
         const result =  this.systemService.addSystem(newSystem);
         return result
     } catch (error) {
         console.log(error);
     }
  
  }
  
  @Get()
  getAll() {
    try {
       return this.systemService.getAll()
    } catch (error) {
      console.log(error);
    }
  }
  
@Get('/:id')
  getByID(@Param('id') id: string) {
    
    try {
        return this.systemService.getByID(id)
    } catch (error) {
        console.log(error);
    }
 }

  @Delete('/:id')
  delete(@Param('id') _id: string) {
    try {
        return this.systemService.deleteSystem(_id)
    } catch (error) {
          console.log(error);
    }
 }

  @Put('/:id')
  update(@Param('id') _id: string, @Body() updatesystem:System ) {
    console.log(_id)
    try {
        return this.systemService.updateSystem(_id, updatesystem)
    } catch (error) {
         console.log(error);
    }

  }
}


