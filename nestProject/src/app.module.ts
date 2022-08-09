import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AdminModule} from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './system/system.module';
import { User1Module } from './user1/user1.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AdminModule, MongooseModule.forRoot('mongodb://localhost:27017/nest'), SystemModule, User1Module]
})
export class AppModule {}
