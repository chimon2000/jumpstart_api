import { NestFactory } from '@nestjs/core'
import { http } from '@nitric/sdk'

import { ToglsService } from '../togls/togls.service'
import { AppModule } from './app.module'

async function bootstrap(port: number) {
  const app = await NestFactory.create(AppModule)
  const toglsService = app.get(ToglsService)

  await toglsService.init({})

  console.log(`started at ${port}`)

  return await app.listen(port)
}

http(bootstrap)
