import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from './system.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class SystemService {
    constructor(@InjectModel('System') private readonly systemModel: Model<System>) { }

    async addSystem(object: string, objectname: string, owner: string, descrapition: string, phone: string, mail: string) {
        console.log("signup");
        const newSystem = new this.systemModel({ object, objectname, owner, descrapition, phone, mail });
        const result = await newSystem.save();
        return result;
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

    async updateSystem(_id: string, object: string, objectname: string, owner: string, descrapition: string, phone: string, mail: string) {
        const update = await this.systemModel.findByIdAndUpdate(new ObjectId(_id), { _id, object, objectname, owner, descrapition, phone, mail });
        return update;
    }
}

