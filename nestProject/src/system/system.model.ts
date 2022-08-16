import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
//   id: { type: String, required: true },
  topic: { type: String, required: true },
  objectname: { type: String, required: true },
  owner: { type: String, required: true },
  descrapition: { type: String, required: true},
  phone: { type: String, required: true },
  mail: { type: String, required: true},
});


export interface System {
    // id: string;
    topic: string;
    objectname: string;
    owner: string;
    descrapition: string;
    phone: string;
    mail: string;
}