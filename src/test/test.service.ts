import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  public getTestString(): string {
    return 'test'
  }
}
