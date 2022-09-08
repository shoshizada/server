import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailObject } from './mail.model';
const sgMail = require('@sendgrid/mail');
require('dotenv').config();
sgMail.setApiKey(process.env.SEND_GRID_KEY);
const { ObjectId } = require("mongodb");

  const testmsg = {
  to: 'S0556737338@gmail.com', // Change to your recipient
  from: 'S0556737338@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>hello ester i miss you do you want to open new location in my organization</strong>',
  }

@Injectable()
export class MailService {

    send(mail:MailObject) {
    console.log("key:");
    console.log(process.env.SENDGRID_API_KEY);
    console.log('mail service');
    console.log(testmsg.from);
    sgMail.send(mail)
      .then((res) => {
        console.log(res);
        const transport = res;
        console.log(transport);
        console.log(`E-Mail sent to ${mail}`);
        return transport;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}











  
