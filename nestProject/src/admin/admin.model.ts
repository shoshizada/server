import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { log } from 'console';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;
// מערכות
// uid
// נוֹשֵׂא
// שם אובייקט
// בעלים
// תיאור
// פרטי תקשורת (מייל/טלפון)
@Schema()
export class Admin {
    constructor(){
        console.log('construct') ;
    }
  @Prop({ required: true })
  object: string;

  @Prop({ required: true })
  objectname: string;

  @Prop({ required: true })
  owner: string;

  @Prop({ required: true })
  descrapition: string;

  @Prop({ required: true })
    phone: string;

  @Prop({ required: true })
    mail: string;

}

export const AdminDocument = SchemaFactory.createForClass( Admin );

export interface Admin {
    id: string;
    object: string;
    objectname: string;
    owner: string;
    descrapition: string;
    phone: string;
    mail: string;
}