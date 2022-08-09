import { Controller, Post, Body, Get,Delete,Put } from '@nestjs/common';
import { UserService } from './user1.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('post')
  signup(@Body('role') role:string,@Body('firstName') firstName:string, @Body('lastName') lastName:string,
  @Body('phone') phone:string,@Body('email') email:string){
    console.log(this.userService.addUser(role,firstName,lastName,phone, email));
    return this.userService.addUser(role,firstName,lastName,phone, email )
  }
  @Get('getAll')
  getAll(){
    return this.userService.getAll()
  }

  
}