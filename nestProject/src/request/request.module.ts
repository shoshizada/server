import { Module } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Request', schema: ReadableStream}])],
  providers: [RequestService],
  controllers: [RequestController]
})
export class RequestModule {}
