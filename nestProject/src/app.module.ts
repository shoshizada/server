import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AdminModule} from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, AdminModule, MongooseModule.forRoot('mongodb://localhost:27017/nest')]
})
export class AppModule {}
