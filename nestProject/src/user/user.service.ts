import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User> ) { }

 async signup(firstName:string, lastName:string) {
        const newUser = new this.userModel({firstName , lastName});
    const result=  await  newUser.save();
       console.log(result);
        return result;
    }
   async getAll() {
        const result = await this.userModel.find();
        return result
    }
}