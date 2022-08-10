import { Module } from '@nestjs/common';
import { AdminModule} from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './system/system.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [ AdminModule, MongooseModule.forRoot('mongodb://localhost:27017/nest'), SystemModule, UserModule]
})
export class AppModule {}
