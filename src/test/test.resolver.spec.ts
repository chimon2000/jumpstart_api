import { Test, TestingModule } from '@nestjs/testing'
import { TestResolver } from './test.resolver'
import { TestService } from './test.service'

describe('TestResolver', () => {
  let testResolver: TestResolver

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TestResolver, TestService],
    }).compile()

    testResolver = app.get<TestResolver>(TestResolver)
  })

  describe('hello', () => {
    it('should return version', async () => {
      const testResponse = await testResolver.test()
      expect(testResponse).toEqual('test')
    })
  })
})
