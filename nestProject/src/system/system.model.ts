import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
//   id: { type: String, required: true },

  admin_id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true},
  subject: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true},
  

});


export interface System {
    // id: string;
    admin_id: string;
    name: string;
    description: string;
    subject: string;
    phone: string;
    email: string;
  
}