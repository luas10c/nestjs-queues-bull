import { Controller, Post } from '@nestjs/common'

import { SendMailProducerService } from '../jobs/sendmail-producer.service.js'

@Controller({
  path: 'email'
})
export class EmailController {
  constructor(private readonly mailer: SendMailProducerService) {}

  @Post('/')
  async create() {

    const data = await this.mailer.sendMail({
      email: 'loren89@ethereal.email',
    })

    return data
  }
}
