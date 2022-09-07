import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from './request.model'
// import {sendMsg} from '../Mail/mail.service';
import {MailObject} from '../mail/mail.model'
const { ObjectId } = require("mongodb");
// import {SystemService} from '../system/system.service.spec';

@Injectable()
export class RequestService {
    MailObject: any;
    constructor(@InjectModel('Request') private readonly requestModel: Model<Request>) { }

    findEmailBySystemId(){

    }

    async addRequest(newRequest: Request) {
        const createSystem = new this.requestModel(
            {
                firstName: newRequest.firstName,
                lastName: newRequest.lastName,
                email: newRequest.email,
                phone: newRequest.phone,
                system_id: new ObjectId(newRequest.system_id),
                display_name: newRequest.display_name,
                status: newRequest.status,
                notes: newRequest.notes
            });
        // const to=findEmailBySystemId();
        // const mail=new this.MailObject(
        //     {
        //      to: "",//לשלוף מנהל מייל לפי הסיטם אידי
        //      from: 's0556737338@gmail.com',
        //      subject:newRequest.display_name,
        //      text: newRequest.email,
        //      html:"",
        //     }

        // )

        //      sendMsg(mail);

               const result=  await  createSystem.save();
               console.log(result);
                return result;
    }
    async getAll() {
        const result = await this.requestModel.find();
        return result as Request[];
    }
    async getByID(id: string) {
        console.log("dddd");
        const result = await this.requestModel.findOne({_id:new ObjectId(id)});
        console.log(result);
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
