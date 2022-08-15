import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from './system.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class SystemService {

constructor(@InjectModel('System') private readonly systemModel: Model<System> ) { }

 async addSystem(newSystem:System) {
        const createSystem = new this.systemModel(
            {   
                object:newSystem.object,
                objectname:newSystem.objectname,
                owner: newSystem.owner, 
                descrapition: newSystem.descrapition,
                phone: newSystem.phone,
                mail: newSystem.mail
            });
    const result=  await  createSystem.save();
       console.log(result);
        return result;
    }
   async getAll() {
        const result = await this.systemModel.find();
        return result as System[];
    }
    async getByID(id:string) {
        const result = await this.systemModel.findOne({_id:id});
        return result;

    }
    async deleteSystem(id:string) {
        const user=await this.systemModel.findByIdAndDelete(id);
        user.save();
        return "sucsess!"
       }

       async updateSystem(_id:string, updateSystem:System) {
           console.log(updateSystem.object);
        const update = await this.systemModel.findByIdAndUpdate(new ObjectId(_id),
        { 
                // id:updateSystem.id,
                object:updateSystem.object,
                objectname:updateSystem.objectname,
                owner: updateSystem.owner, 
                descrapition: updateSystem.descrapition,
                phone: updateSystem.phone,
                mail: updateSystem.mail
            });
            update.save();
        return update;
          
        }

}
