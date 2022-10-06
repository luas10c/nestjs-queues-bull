import { MailerService } from "@nestjs-modules/mailer";
import { OnQueueActive, OnQueueCompleted, OnQueueProgress, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('sendmail-queue')
export class SendMailConsumer {
  constructor(private readonly mailer: MailerService) {}

  @Process("sendmail-job")
  async sendMailJob(job: Job<{ email: string}>) {
    const { data } = job
    console.log(data)

    await this.mailer.sendMail({
      to: data.email,
      from: 'Equipe Code/Drops <codedrops@codedrops.com.br>',
      subject: 'Email Subject',
      text: '.....'
    })
  }

  @OnQueueCompleted()
  handeComplete(job: Job) {
    console.log(`${job.name} is complete!`)
  }

  @OnQueueProgress()
  handleProgress(job: Job) {
    console.log(`${job.name} is progress!`)
  }

  @OnQueueActive()
  handleActive(job: Job) {
    console.log(`${job.name} is active!`)
  }
}
