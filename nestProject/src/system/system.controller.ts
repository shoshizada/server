import { Controller, Post, Body, Get, Delete, Put, Param } from '@nestjs/common';
import { System } from './system.model';
import { SystemService } from './system.service';




@Controller('system')
export class SystemController {
  constructor(private systemService: SystemService) { }

  @Post()
  async signup(@Body('newBusiness') newBusiness: any) {
    console.log(newBusiness);
    const result = await this.systemService.addSystem(newBusiness);
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
  update(@Param('_id') _id: string, @Body('updateSystem') updateSystem:System) {
    return this.systemService.updateSystem(_id, updateSystem)
  }
}
