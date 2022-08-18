import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
//   id: { type: String, required: true },
  topic: { type: String, required: true },
  objectName: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true},
  phone: { type: String, required: true },
  email: { type: String, required: true},
  urlName: { type: String, required: true }

});


export interface System {
    // id: string;
    topic: string;
    objectName: string;
    owner: string;
    description: string;
    phone: string;
    email: string;
    urlName: string;
}