import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost:27017/nest')],

})
export class AppModule {}
