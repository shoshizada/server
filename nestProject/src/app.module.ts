import { Module } from '@nestjs/common';
import { AdminModule} from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';



@Module({
  imports: [ AdminModule, MongooseModule.forRoot('mongodb://localhost:27017/nest'), UserModule]
})
export class AppModule {}
