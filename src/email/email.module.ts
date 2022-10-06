import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bull'
import { MailerModule } from '@nestjs-modules/mailer'

import { SendMailProducerService } from '../jobs/sendmail-producer.service.js'
import { SendMailConsumer } from '../jobs/sendmail-consumer.js';

import { EmailController } from './email.controller.js'

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis-13597.c8.us-east-1-4.ec2.cloud.redislabs.com',
        port: 13597,
        name: 'luciano-free-db',
        username: 'default',
        password: 'uZgPVdiVgGveS3Bb246sBeDitS74GdRV'
      }
    }),
    BullModule.registerQueue({
      name: 'sendmail-queue'
    }),
    MailerModule.forRootAsync({
      useFactory() {
        return {
          transport: {
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
              user: 'loren89@ethereal.email',
              pass: 'wCsJmjQUqw5e27fwTh'
            }
          }
        }
      }
    })
  ],
  providers: [SendMailProducerService, SendMailConsumer],
  controllers: [EmailController]
})
export class EmailModule {}
