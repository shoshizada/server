import * as mongoose from 'mongoose';

export const ManagerSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    system_id: {
        type: String,
        required: true
    },
    active: { type: Boolean, required: true },
    display_name: { type: String, required: true },
    role: { type: String, required: true },
    invitation_sent: { type: Boolean, required: true },
});

export interface Manager {
    user_id: string;
    system_id: string;
    active: boolean;
    display_name: string;
    role: string;
    invitation_sent: boolean
}