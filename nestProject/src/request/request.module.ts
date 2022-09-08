import { UserModule } from './../user/user.module';
import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema } from './request.model';
import { ManagerModule } from 'src/manager/manager.module';
import {MailModule} from 'src/mail/mail.module';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Request', schema: RequestSchema}]),ManagerModule,UserModule,MailModule],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule {}
