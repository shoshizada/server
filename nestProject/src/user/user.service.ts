import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
const { ObjectId } = require("mongodb");

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
        return result as User[];
    }
    async getByID(id:string) {
        const result = await this.userModel.findOne({_id:id});
        return result;

    }
    async deleteUser(id:string) {
        const user=await this.userModel.findByIdAndDelete(id);
        user.save();
        return "sucsess!"
       }

       async updateUser(_id:string,role:string,firstName: string,lastName:string,phone: string, email:string) {
        const update = await this.userModel.findByIdAndUpdate(new ObjectId(_id),{_id,role, firstName,lastName,phone, email});
        return update;
          
        }
}