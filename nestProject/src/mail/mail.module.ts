import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { MailSchema } from './mail.model';
import { MailController } from './mail.controller';

@Module({
  imports: [],
  providers: [MailService],
  controllers: [MailController],
  exports:[MailService]
})
export class MailModule {}