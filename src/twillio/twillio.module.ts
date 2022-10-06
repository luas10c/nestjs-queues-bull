import { Module } from '@nestjs/common'
import { HttpModule } from "@nestjs/axios"

import { TwillioController } from './twillio.controller.js'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory() {
        return {
          //
        }
      }
    })
  ],
  controllers: [TwillioController]
})
export class TwillioModule {}
