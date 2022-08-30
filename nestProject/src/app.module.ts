import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SystemModule } from './system/system.module';
import { ManagerModule } from './manager/manager.module';
import { LocationModule } from './location/location.module';



@Module({
  imports: [  MongooseModule.forRoot('mongodb://localhost:27017/nest'),
   UserModule,
   SystemModule,
   ManagerModule,
   LocationModule,
]
})
export class AppModule {}
