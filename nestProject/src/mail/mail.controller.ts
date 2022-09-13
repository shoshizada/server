
import { MailObject } from './mail.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MailService } from './mail.service';
@Controller('mail')
export class MailController {
    constructor(private mailService: MailService) {}

   @Post()
   async signup(@Body() mail:MailObject) {
         console.log("hjkl");
     try {
       
           const result =  await this.mailService.send(mail);
           console.log(result);
           return result
        
     } catch (error) {
        console.log(error);
     }

  }

}