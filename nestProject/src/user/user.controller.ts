import { Controller, Post, Body, Get,Delete,Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('post')
  signup(@Body('firstName') firstName:string, @Body('lastName') lastName:string){
    console.log(this.userService.signup(firstName,lastName));
    return this.userService.signup(firstName,lastName)
  }

  @Get('getAll')
  getAll(){
    return this.userService.getAll()
  }
}