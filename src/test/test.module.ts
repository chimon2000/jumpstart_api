import { Module } from '@nestjs/common'
import { TestController } from './test.controller'
import { TestResolver } from './test.resolver'
import { TestService } from './test.service'

@Module({
  controllers: [TestController],
  providers: [TestResolver, TestService],
})
export class TestModule {}
