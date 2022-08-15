import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';



@Module({
  imports: [  MongooseModule.forRoot('mongodb://localhost:27017/nest'), UserModule, SystemModule]
})
export class AppModule {}
