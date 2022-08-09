import { Controller, Post, Body, Get,Delete,Put } from '@nestjs/common';
import { AdminService } from './admin.services';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @Post('post')
  signup(@Body('object') object:string, @Body('objectname') objectname:string, @Body('owner') owner:string,
  @Body('descrapition') descrapition:string,@Body('phone') phone:string,@Body('mail') mail:string){
    return this.adminService.signup(object,objectname,owner,descrapition,phone,mail)
  }

  @Get('getAll')
  getAll(){
    return this.adminService.getAll()
  }
  @Delete('delete')
  delete(@Body('_id') _id:string){
    return this.adminService.deleteadmin(_id)
  }
  @Put('put')
  update(@Body('_id') _id:string,@Body('object') object:string, @Body('objectname') objectname:string, @Body('owner') owner:string,
   @Body('descrapition') descrapition:string,@Body('phone') phone:string,@Body('mail') mail:string){
    return this.adminService.updateadmin(_id,object,objectname,owner,descrapition,phone,mail)
  }
}