import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { ManagerModule } from './manager/manager.module';
import { LocationModule } from './location/location.module';
import { RequestModule } from './request/request.module';
import {MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [  MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ConfigModule.forRoot({
  envFilePath: '.env',
  }),
   UserModule,
   SystemModule,
   ManagerModule,
   LocationModule,
   RequestModule,
   MailModule,
   
]
})
export class AppModule {}
