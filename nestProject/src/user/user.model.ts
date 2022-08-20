import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  role: { type: String, enum: ['admin', 'customer'], required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true},
});

export interface User {
  role: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}