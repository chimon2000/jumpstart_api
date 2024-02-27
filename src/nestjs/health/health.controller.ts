import { Controller, Get } from '@nestjs/common'
import { Health } from './models/health.model'
import { HealthService } from './health.service'

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  public health(): Health {
    return this.healthService.getHealth()
  }
}
