import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestService } from './request.service';
import { Request } from './request.model'

@Controller('request')
export class RequestController {
    constructor(private requestService: RequestService) {}

      @Post()
   signup(@Body() newRequest: Request) {
    const result =  this.requestService.addRequest(newRequest);
    return result
  }
  @Get()
  getAll() {
    return this.requestService.getAll()
  }
  @Get('/:id')
  getByID(@Param('id') id: string) {
    return this.requestService.getByID(id)
  }

  @Delete('/:id')
  delete(@Param('id') _id: string) {
    return this.requestService.deleteRequest(_id)
  }
  @Put('/:id')
  update(@Param('id') _id: string, @Body() updateRequest:Request ) {
    console.log(_id)
    return this.requestService.updateRequest(_id, updateRequest)
  }
}