import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location } from './location.model';
const { ObjectId } = require("mongodb");

@Injectable()
export class LocationService {
    constructor(@InjectModel('Location') private readonly locationModel: Model<Location>) {}

        async addLocation(newLocation:Location) {
                const createLocation = new this.locationModel(
                    {   
                        manager_id: newLocation.manager_id,
                        system_id: newLocation.system_id,
                        location_geolocation: {
                            lat: newLocation.location_geolocation.lat,
                            lng: newLocation.location_geolocation.lng
                        },
                        description: newLocation.description,
                        name: newLocation.name,
                        notes: newLocation.notes,
                        communication_details: {
                            phone: newLocation.communication_details.phone,
                            email: newLocation.communication_details.email
                        }
                    });
            const result=  await  createLocation.save();
               console.log(result);
                return result;
            }
                async getAll() {
        const result = await this.locationModel.find();
        return result as Location[];
    }
        async getByID(id:string) {
        const result = await this.locationModel.findOne({_id:id});
        return result;
    }
        async deleteLocation(id:string) {
        const location=await this.locationModel.findByIdAndDelete(id);
        location.save();
        return "success!"
       }
           async updateLocation(_id:string, updateLocation:Location) {
           console.log(updateLocation.manager_id);
        const update = await this.locationModel.findByIdAndUpdate(new ObjectId(_id),
        { 
                        manager_id: updateLocation.manager_id,
                        system_id: updateLocation.system_id,
                        location_geolocation: {
                            lat: updateLocation.location_geolocation.lat,
                            lng: updateLocation.location_geolocation.lng
                        },
                        description: updateLocation.description,
                        name: updateLocation.name,
                        notes: updateLocation.notes,
                        communication_details: {
                            phone: updateLocation.communication_details.phone,
                            email: updateLocation.communication_details.email
                        }
            });
            update.save();
        return update;
          
        }  
}

