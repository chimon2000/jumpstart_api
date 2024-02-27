import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ToglsService } from './togls.service'

@Module({
  imports: [ConfigModule],
  providers: [ToglsService],
  exports: [ToglsService],
})
export class ToglsModule {}
