import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminDocument } from './admin.model';
import { AdminService } from './admin.services';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Admin', schema: AdminDocument}])],
  controllers: [AdminController],
  providers: [AdminService],
})

export class AdminModule {}


