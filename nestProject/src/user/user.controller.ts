import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('post')
  signup(@Body('firstName') firstName:string, @Body('lastName') lastName:string){
    return this.userService.signup(firstName,lastName)
  }

  @Get('getAll')
  getAll(){
    return this.userService.getAll()
  }
}