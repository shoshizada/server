import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User> ) { }

 async addUser(role:string, firstName:string, lastName:string, phone:string, email:string) {
        const newUser = new this.userModel({role,firstName,lastName,phone, email});
    const result=  await  newUser.save();
       console.log(result);
        return result;
    }
   async getAll() {
        const result = await this.userModel.find();
        return result
    }
}