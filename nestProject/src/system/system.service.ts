import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from './system.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class SystemService {
    constructor(@InjectModel('System') private readonly systemModel: Model<System>) { }

    async addSystem(newSystem: System) {
        console.log("signup");
        const createdSystem = new this.systemModel({
            topic: newSystem.topic,
            objectName:newSystem.objectname,
            owner:newSystem.owner,
            description:newSystem.description,
            phone: newSystem.phone,
            email: newSystem.email
          });
         const result= await createdSystem.save();
         return result
    }

    async getAll() {
        const result = await this.systemModel.find();
        return result
    }
    async getByID(id: string) {
        const result = await this.systemModel.findOne({ _id: id });
        return result;
    }

    async deleteSystem(_id: string) {
        const system = await this.systemModel.findByIdAndDelete(_id);
        system.save();
        return "sucsess!"
    }

    async updateSystem(_id: string, topic: string, objectname: string, owner: string, description: string, phone: string, mail: string) {
        const update = await this.systemModel.findByIdAndUpdate(new ObjectId(_id), { _id, topic, objectname, owner, description, phone, mail });
        return update;
    }
}

