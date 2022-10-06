import { NestFactory } from '@nestjs/core'
import { networkInterfaces } from 'node:os'

import { AppModule } from './app.module.js'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const PORT = process.env.PORT || 44767

  await app.listen(PORT, '0.0.0.0', () => {
    const nets = networkInterfaces()
    console.log(`🌎 Listening on ${PORT}`)
    console.log(
      `🔥 Local Address: http://${Object.values(nets)[0][0].address}:${PORT}`
    )
    console.log(
      `🔥 Local Address: http://${Object.values(nets)[1][0].address}:${PORT}`
    )
  })
}

bootstrap()
