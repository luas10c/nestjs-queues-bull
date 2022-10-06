import { Controller, Post } from '@nestjs/common'

@Controller({
  path: 'twillio'
})
export class TwillioController {
  @Post('/')
  async create() {
    return {}
  }
}
