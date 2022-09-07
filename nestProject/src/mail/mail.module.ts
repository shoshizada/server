import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MailSchema } from './mail.model';
import { MailController } from './mail.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Request', schema: MailSchema}])],
  providers: [MailService],
  controllers: [MailController]
})
export class MailModule {}