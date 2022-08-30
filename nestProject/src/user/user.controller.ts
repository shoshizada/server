import { Controller, Post, Body, Get, Delete, Put, Param } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  async signup(@Body() newUser: User) {
    return await this.userService.addUser(newUser)

  }
  @Get()
  getAll() {
    return this.userService.getAll()
  }
  @Get('/:id')
  getByID(@Param('id') id: string) {
    return this.userService.getByID(id)
  }

  @Delete('/:id')
  delete(@Param('id') _id: string) {
    return this.userService.deleteUser(_id)
  }
  @Put('/:id')
  update(@Param('id') _id: string, @Body('updateUser') updateUser:User ) {
    console.log(_id)
    return this.userService.updateUser(_id, updateUser)
  }

}