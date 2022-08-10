import { Controller, Post, Body, Get, Delete, Put, Param } from '@nestjs/common';
import { System } from './system.model';
import { SystemService } from './system.service';




@Controller('system')
export class SystemController {
  constructor(private systemService: SystemService) { }

  @Post()
  async signup(@Body('newSystem') newSystem: System) {
    console.log(newSystem);
    const result = await this.systemService.addSystem(newSystem);
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
  update(@Param('_id') _id: string, @Body('topic') topic: string, @Body('objectname') objectname: string, @Body('owner') owner: string,
    @Body('description') description: string, @Body('phone') phone: string, @Body('mail') mail: string) {
    return this.systemService.updateSystem(_id, topic, objectname, owner, description, phone, mail)
  }
}
