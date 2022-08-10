
import * as mongoose from 'mongoose';

export const SystemSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  objectname: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true},
});

export interface System {
    id: string;
    topic: string;
    objectname: string;
    owner: string;
    description: string;
    phone: string;
    email: string;
}

// import * as mongoose from 'mongoose';

// export const UserSchema = new mongoose.Schema({
//   role: { type: String, enum: ['admin', 'customer'], required: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   phone: { type: String, required: true },
//   email: { type: String, required: true, unique: true},
// });

// export interface User {
//   uid: string;
//   role: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
//   email: string;
// }