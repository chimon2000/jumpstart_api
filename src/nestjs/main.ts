import { NestFactory } from '@nestjs/core'
import { http } from '@nitric/sdk'

import { ToglsService } from '../togls/togls.service'
import { AppModule } from './app.module'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap(port: number) {
  const app = await NestFactory.create(AppModule)
  const toglsService = app.get(ToglsService)

  await toglsService.init({})

  return await app.listen(port)
}

http(bootstrap)
