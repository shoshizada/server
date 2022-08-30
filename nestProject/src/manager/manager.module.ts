import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerController } from './manager.controller';
import { ManagerSchema } from './manager.model';
import { ManagerService } from './manager.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Manager', schema: ManagerSchema}])],
  controllers: [ManagerController],
  providers: [ManagerService]
})
export class ManagerModule {}
