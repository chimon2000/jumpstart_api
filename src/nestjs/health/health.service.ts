import { Injectable } from '@nestjs/common'
import { Health } from './models/health.model'
import * as pjson from '../../../package.json'

@Injectable()
export class HealthService {
  public getHealth(): Health {
    return new Health(pjson.version)
  }
}
