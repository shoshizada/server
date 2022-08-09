import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user1.controller';
import {  UserDocument } from './user.model';
import { UserService } from './user1.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserDocument}])],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {}
