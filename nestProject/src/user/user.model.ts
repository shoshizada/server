import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { log } from 'console';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    constructor(){
        console.log('construct') ;
    }
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;
}

export const UserDocument = SchemaFactory.createForClass( User );

export interface User {
    id: string;
    firstName: string;
    lastName: string;
}




