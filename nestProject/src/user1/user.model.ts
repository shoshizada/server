import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { log } from 'console';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    constructor() {
        console.log('construct');
    }
    @Prop({ required: true })
    role: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true })
    email: string;
}

export const UserDocument = SchemaFactory.createForClass(User);

export interface User {
    id: string;
    role: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}
