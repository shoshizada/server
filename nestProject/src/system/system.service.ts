import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from './system.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class SystemService {

constructor(@InjectModel('System') private readonly systemModel: Model<System> ) { }

 async addSystem(newSystem:System) {
     console.log(newSystem);
        const createSystem = new this.systemModel(
            {   
                admin_id:newSystem.admin_id,
                name:newSystem.name,
                description: newSystem.description,
                subject: newSystem.subject,
                phone: newSystem.phone,
                email: newSystem.email
               
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
        console.log(id);
        const result = await this.systemModel.findOne({_id:new ObjectId(id)});
        console.log(result);
        return result;

    }
    async deleteSystem(id:string) {
        const system=await this.systemModel.findByIdAndDelete(id);
        system.save();
        return "success!"
       }

       async updateSystem(_id:string, updateSystem:System) {
           console.log(updateSystem);
        const update = await this.systemModel.findByIdAndUpdate(new ObjectId(_id),
        { 
                // id:updateSystem.id,
                admin_id:updateSystem.admin_id,
                name:updateSystem.name,
                description: updateSystem.description,
                subject: updateSystem.subject,
                phone: updateSystem.phone,
                email: updateSystem.email
            });
           const result = await update.save();
           console.log(result);
        return result;
          
        }

}
