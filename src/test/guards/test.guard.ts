import { CanActivate, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class TestGuard implements CanActivate {
  public canActivate(): boolean | Promise<boolean> | Observable<boolean> {
    return process.env.ENV == 'local' ? true : false
  }
}
