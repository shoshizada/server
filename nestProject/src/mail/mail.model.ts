// import * as mongoose from 'mongoose';

// export const MailSchema = new mongoose.Schema({
//   to:{ type: String, required: true },
//   from: { type: String, required: true },
//   subject: { type: String, required: true },
//   text: { type: String, required: true },
//   html: { type: String, required: true},
// });


export interface MailObject {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
 }