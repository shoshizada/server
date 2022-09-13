import * as mongoose from 'mongoose';

export const RequestSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    phone: { type: String, required: true },
    system_id: { type: String, required: true },
    display_name: { type: String, required: true },
    status: { type: String, required: true },
    notes: { type: String, required: true },
});

export interface Request {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    system_id: string;
    display_name: string
    status: string;
    notes: string;
}