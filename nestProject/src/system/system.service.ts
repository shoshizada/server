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
                topic:newSystem.topic,
                objectName:newSystem.objectName,
                owner: newSystem.owner, 
                description: newSystem.description,
                phone: newSystem.phone,
                email: newSystem.email,
                urlName: newSystem.urlName
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
           console.log(updateSystem.topic);
        const update = await this.systemModel.findByIdAndUpdate(new ObjectId(_id),
        { 
                // id:updateSystem.id,
                topic:updateSystem.topic,
                objectName:updateSystem.objectName,
                owner: updateSystem.owner, 
                description: updateSystem.description,
                phone: updateSystem.phone,
                email: updateSystem.email,
                urlName: updateSystem.urlName
            });
            update.save();
        return update;
          
        }

}
