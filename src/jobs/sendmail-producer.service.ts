import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Injectable()
export class SendMailProducerService {
  constructor(@InjectQueue("sendmail-queue") private readonly queue: Queue) {}

  async sendMail(data: any) {
    const queue = await this.queue.add('sendmail-job', data, { delay: 2000 })
    return queue
  }
}
