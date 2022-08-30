import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private readonly userModel: Model<User> ) { }

 async addUser(newUser:User) {
        const createUser = new this.userModel(
            {  firebase_uid:newUser.firebase_uid,
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                phone: newUser.phone, 
                email: newUser.email
            });
    const result=  await  createUser.save();
       console.log(result);
        return result;
    }
   async getAll() {
        const result = await this.userModel.find();
        return result as User[];
    }
    async getByID(id:string) {
        const result = await this.userModel.findById({_id:id});
        return result;

    }
    async deleteUser(id:string) {
        const user=await this.userModel.findByIdAndDelete(id);
        user.save();
        return "sucsess!"
       }

       async updateUser(_id:string, updateUser:User) {
        const update = await this.userModel.findByIdAndUpdate(new ObjectId(_id),
        {   firebase_uid:updateUser.firebase_uid,
             firstName: updateUser.firstName,
             lastName: updateUser.lastName,
             phone: updateUser.phone,
              email: updateUser.email
            });
        return update;
          
        }
}