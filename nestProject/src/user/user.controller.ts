import { Controller, Post, Body, Get, Delete, Put, Param } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  async signup(@Body() newUser: User) {
    try {
          return await this.userService.addUser(newUser)
    } catch (error) {
        console.log(error);
    }
  }
  
  @Get()
  getAll() {
  try {
      return this.userService.getAll()
  } catch (error) {
      console.log(error);
  }
  }

  @Get('/:id')
  getByID(@Param('id') id: string) {
    try {
      return this.userService.getByID(id)
    } catch (error) {
           console.log(error);
    }
  }

  @Delete('/:id')
  delete(@Param('id') _id: string) {
    try {
         return this.userService.deleteUser(_id)
    } catch (error) {
         console.log(error);
    }
  }
  
  @Put('/:id')
  update(@Param('id') _id: string, @Body('updateUser') updateUser:User ) {
    console.log(_id)
    try {
         return this.userService.updateUser(_id, updateUser)
    } catch (error) {
            console.log(error);
    }
 }

}