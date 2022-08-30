import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from './request.model'
const { ObjectId } = require("mongodb");

@Injectable()
export class RequestService {
    constructor(@InjectModel('Request') private readonly requestModel: Model<Request>) { }

    async addRequest(newRequest: Request) {
        const createSystem = new this.requestModel(
            {
                firstName: newRequest.firstName,
                lastName: newRequest.lastName,
                email: newRequest.email,
                phone: newRequest.phone,
                system_id: newRequest.system_id,
                display_name: newRequest.display_name,
                status: newRequest.status,
                notes: newRequest.notes

            });
    }
    async getAll() {
        const result = await this.requestModel.find();
        return result as Request[];
    }
    async getByID(id: string) {
        const result = await this.requestModel.findOne({ _id: id });
        return result;

    }
    async deleteRequest(id: string) {
        const request = await this.requestModel.findByIdAndDelete(id);
        request.save();
        return "success!"
    }
    async updateRequest(_id: string, updateRequest: Request) {
        console.log(updateRequest.firstName);
        const update = await this.requestModel.findByIdAndUpdate(new ObjectId(_id),
            {
                firstName: updateRequest.firstName,
                lastName: updateRequest.lastName,
                email: updateRequest.email,
                phone: updateRequest.phone,
                system_id: updateRequest.system_id,
                display_name: updateRequest.display_name,
                status: updateRequest.status,
                notes: updateRequest.notes
            });
        update.save();
        return update;

    }
}
