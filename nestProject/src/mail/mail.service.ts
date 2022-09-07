import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MailObject } from './mail.model';
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const { ObjectId } = require("mongodb");

  const testmsg = {
  to: 'Z0504162358@gmail.com', // Change to your recipient
  from: '3871.iz@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }

@Injectable()
export class MailService {

  // constructor(@InjectModel('Mail') private readonly mailModel: Model<MailObject> ) { }
    send(mail:MailObject) {
    console.log('mail service');
    console.log(mail);
    sgMail.send(testmsg)
      .then((res) => {
        console.log(res);
        const transport = res;
        console.log(transport);
        // avoid this on production. use log instead :)
        console.log(`E-Mail sent to ${mail}`);
        return transport;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //  sendMsg(msg: MailObject) {
  //     console.log(msg)
  //     try {
  //        sgMail.send(testmsg).then((res) => {
  //        const transport = res;
  //        console.log(`E-Mail sent to ${res}`);
  //        console.log(`E-Mail sent to ${transport}`);
  //       // avoid this on production. use log instead :)
  //        console.log(`E-Mail sent to ${msg.to}`);
  //       return transport;
  //        });
      
  //       } catch (error) {
  //        console.error(error)
  //     }
          
  //   }
}











  
