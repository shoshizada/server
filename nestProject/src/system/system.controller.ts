import { Controller, Post, Body, Get,Delete,Put } from '@nestjs/common';
import { SystemService } from './system.service';



@Controller('system')
export class SystemController {
    constructor(private systemService: SystemService) {}

      @Post('post')
  signup(@Body('object') object:string, @Body('objectname') objectname:string, @Body('owner') owner:string,
  @Body('descrapition') descrapition:string,@Body('phone') phone:string,@Body('mail') mail:string){
    return this.systemService.addSystem(object,objectname,owner,descrapition,phone,mail)
  }

    @Get('getAll')
  getAll(){
    return this.systemService.getAll()
  }

  @Delete('delete')
  delete(@Body('_id') _id:string){
    return this.systemService.deleteSystem(_id)
  }

    @Put('put')
  update(@Body('_id') _id:string,@Body('object') object:string, @Body('objectname') objectname:string, @Body('owner') owner:string,
   @Body('descrapition') descrapition:string,@Body('phone') phone:string,@Body('mail') mail:string){
    return this.systemService.updateSystem(_id,object,objectname,owner,descrapition,phone,mail)
  }
}
