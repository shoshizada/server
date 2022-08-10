import { Controller, Post, Body, Get, Delete, Put, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  async signup(@Body('role') role: string, @Body('firstName') firstName: string, @Body('lastName') lastName: string,
    @Body('phone') phone: string, @Body('email') email: string) {
    const newUser = await this.userService.addUser(role, firstName, lastName, phone, email)
    return newUser
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
  update(@Param('id') _id: string, @Body('role') role: string, @Body('firstName') firstName: string,
    @Body('lastName') lastName: string, @Body('phone') phone: string, @Body('phone') @Body('email') email: string) {
    console.log(_id)
    return this.userService.updateUser(_id, role, firstName, lastName, phone, email)
  }

}