import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './admin.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class AdminService {

    constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin> ) { }

  async signup(object:string,objectname: string,owner:string,descrapition: string, phone:string,  mail: string) {
     console.log("signup");
        const newAdmin = new this.adminModel({object,objectname,owner,descrapition, phone,mail});
    const result=  await  newAdmin.save();
       return result;
    }
   async getAll() {
        const result = await this.adminModel.find();
        return result
    }
    async deleteadmin(_id:string) {
     const admin=await this.adminModel.findByIdAndDelete(_id);
     admin.save();
     return "sucsess!"
    }
    async updateadmin(_id:string,object:string,objectname: string,owner:string,descrapition: string, phone:string,  mail: string) {
    const update = await this.adminModel.findByIdAndUpdate(new ObjectId(_id),{_id,object,objectname,owner,descrapition, phone,mail});
    return update;
      
    }
}

