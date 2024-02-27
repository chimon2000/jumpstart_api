import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { UptechGrowthBookTypescriptWrapper } from '@uptechworks/uptech-growthbook-sdk-typescript'

@Injectable()
export class ToglsService {
  public static test = 'test'

  private instance: UptechGrowthBookTypescriptWrapper

  constructor(private configService: ConfigService) {
    const apiHost = this.configService.getOrThrow('GROWTHBOOK_API_HOST')
    const clientKey = this.configService.getOrThrow('GROWTHBOOK_CLIENT_KEY')
    this.instance = new UptechGrowthBookTypescriptWrapper(apiHost, clientKey)
  }

  public get isTestOn(): boolean {
    return this.instance.isOn(ToglsService.test)
  }

  public refresh(): void {
    this.instance.refresh()
  }

  public init(params: any): Promise<void> {
    return this.instance.init(params)
  }
}
