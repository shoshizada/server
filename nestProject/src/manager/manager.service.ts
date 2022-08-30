import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Manager } from './manager.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class ManagerService {
    constructor(@InjectModel('Manager') private readonly managerModel: Model<Manager>) {}

    async addManager(newManager:Manager) {
                const createSystem = new this.managerModel(
                    {   
                        user_id: newManager.user_id,
                         system_id: newManager.system_id,
                         active: newManager.active,
                         display_name: newManager.display_name,
                         role: newManager.role,
                         invitation_sent: newManager.invitation_sent
                    });
            const result=  await  createSystem.save();
               console.log(result);
                return result;
            }
    async getAll() {
        const result = await this.managerModel.find();
        return result as Manager[];
    }
    async getByID(id:string) {
        const result = await this.managerModel.findOne({_id:id});
        return result;

    }
    async deleteManager(id:string) {
        const user=await this.managerModel.findByIdAndDelete(id);
        user.save();
        return "success!"
       }
    async updateManager(_id:string, updateManager:Manager) {
           console.log(updateManager.user_id);
        const update = await this.managerModel.findByIdAndUpdate(new ObjectId(_id),
        { 
            user_id: updateManager.user_id,
            system_id: updateManager.system_id,
            active: updateManager.active,
            display_name: updateManager.display_name,
            role: updateManager.role,
            invitation_sent: updateManager.invitation_sent
            });
            update.save();
        return update;
          
        }   
}