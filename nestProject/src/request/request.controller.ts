import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestService } from './request.service';
import { Request } from './request.model'

@Controller('request')
export class RequestController {
    constructor(private requestService: RequestService) {}

   @Post()
   signup(@Body() newRequest: Request) {
     try {
           const result =  this.requestService.addRequest(newRequest);
           return result
     } catch (error) {
        console.log(error);
     }

  }

  @Get()
  getAll() {
    try {
      return this.requestService.getAll()
    } catch (error) {
          console.log(error);
    }
    
  }
  @Get('/:id')
  getByID(@Param('id') id: string) {
    try {
       return this.requestService.getByID(id)
    } catch (error) {
         console.log(error);
    }
   
  }

  @Delete('/:id')
  delete(@Param('id') _id: string) {
    try {
         return this.requestService.deleteRequest(_id)
    } catch (error) {
          console.log(error);
    }
 
  }

  @Put('/:id')
  update(@Param('id') _id: string, @Body() updateRequest:Request ) {
    console.log(_id)
    try {
          return this.requestService.updateRequest(_id, updateRequest)
    } catch (error) {
         console.log(error);
    }
  }
}