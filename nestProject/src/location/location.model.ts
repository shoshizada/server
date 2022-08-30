import * as mongoose from 'mongoose';



export const LocationSchema = new mongoose.Schema({
    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manager"
    },
    system_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "System"
    },
    location_geolocation: {
        lat: { type: String, required: true },
        lng: { type: String, required: true }
    },
    description: { type: String, required: true },
    name: { type: String, required: true },
    notes: { type: String, required: true },
    communication_details: {
        phone: { type: String, required: true },
        email: { type: String, required: true, unique: true }
    }

});

export interface Location {
    manager_id: mongoose.Schema.Types.ObjectId;
    system_id: mongoose.Schema.Types.ObjectId;
    location_geolocation: {
        lat: number,
        lng: number
    };
    description: string;
    name: string;
    notes: string;
    communication_details: {
        phone: string,
        email: string
    }

}