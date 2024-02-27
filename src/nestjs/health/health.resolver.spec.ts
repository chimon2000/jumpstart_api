import { Test, TestingModule } from '@nestjs/testing'
import { HealthResolver } from './health.resolver'
import { HealthService } from './health.service'

describe('HealthResolver', () => {
  let healthResolver: HealthResolver

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [HealthResolver, HealthService],
    }).compile()

    healthResolver = app.get<HealthResolver>(HealthResolver)
  })

  describe('hello', () => {
    it('should return version', async () => {
      const healthResponse = await healthResolver.health()
      expect(healthResponse.version !== '').toBeTruthy()
    })
  })
})
