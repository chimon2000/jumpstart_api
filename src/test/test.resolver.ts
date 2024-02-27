import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { TestGuard } from './guards/test.guard'
import { TestService } from './test.service'

@UseGuards(TestGuard)
@Resolver(() => String)
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Query(() => String)
  public async test(): Promise<string> {
    return this.testService.getTestString()
  }
}
