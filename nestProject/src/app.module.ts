import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { ManagerModule } from './manager/manager.module';
import { LocationModule } from './location/location.module';
import { RequestModule } from './request/request.module';
import {MailModule } from './mail/mail.module';

@Module({
  imports: [  MongooseModule.forRoot('mongodb+srv://shoshi:afKRPnJYL8scs7xL@cluster0.kovcjyz.mongodb.net/?retryWrites=true&w=majority'),
   UserModule,
   SystemModule,
   ManagerModule,
   LocationModule,
   RequestModule,
   MailModule,
   
]
})
export class AppModule {}
