import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firebase_uid: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true},
});

export interface User {
  firebase_uid: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}