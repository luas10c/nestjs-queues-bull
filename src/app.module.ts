import { Module } from '@nestjs/common'

import { EmailModule } from './email/email.module.js'
import { TwillioModule } from './twillio/twillio.module.js'

@Module({
  imports: [
    EmailModule,
    TwillioModule
  ],
})
export class AppModule {}
