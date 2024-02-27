import { Controller, Get, UseGuards } from '@nestjs/common'
import { TestGuard } from './guards/test.guard'
import { TestService } from './test.service'

@UseGuards(TestGuard)
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  public test(): string {
    return this.testService.getTestString()
  }
}
