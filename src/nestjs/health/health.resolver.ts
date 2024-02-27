import { Query, Resolver } from '@nestjs/graphql'
import { Health } from './models/health.model'
import { HealthService } from './health.service'

@Resolver(() => Health)
export class HealthResolver {
  constructor(private readonly healthService: HealthService) {}

  @Query(() => Health)
  public async health(): Promise<Health> {
    return this.healthService.getHealth()
  }
}
