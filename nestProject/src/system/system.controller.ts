import { Controller, Post, Body, Get, Delete, Put, Param } from '@nestjs/common';
import { SystemService } from './system.service';



@Controller('system')
export class SystemController {
  constructor(private systemService: SystemService) { }

  @Post()
  signup(@Body('object') object: string, @Body('objectname') objectname: string, @Body('owner') owner: string,
    @Body('descrapition') descrapition: string, @Body('phone') phone: string, @Body('mail') mail: string) {
    return this.systemService.addSystem(object, objectname, owner, descrapition, phone, mail)
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
  update(@Param('_id') _id: string, @Body('object') object: string, @Body('objectname') objectname: string, @Body('owner') owner: string,
    @Body('descrapition') descrapition: string, @Body('phone') phone: string, @Body('mail') mail: string) {
    return this.systemService.updateSystem(_id, object, objectname, owner, descrapition, phone, mail)
  }
}
