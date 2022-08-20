import { Controller, Post, Body, Get, Delete, Put, Param  } from '@nestjs/common';
import {System} from './system.model';
import {SystemService} from './system.service';

@Controller('system')
export class SystemController {
      constructor(private systemService: SystemService) { }

  @Post()
   signup(@Body() newSystem: System) {
    const result =  this.systemService.addSystem(newSystem);
    return result
  }
  @Get()
  getAll() {
    return this.systemService.getAll()
  }
  @Get('/:id')
  getByID(@Param('id') id: string) {
    return this.systemService.getByID(id)
  }

  @Delete('/:id')
  delete(@Param('id') _id: string) {
    return this.systemService.deleteSystem(_id)
  }
  @Put('/:id')
  update(@Param('id') _id: string, @Body() updatesystem:System ) {
    console.log(_id)
    return this.systemService.updateSystem(_id, updatesystem)
  }
}


