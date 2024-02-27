import { DynamicModule } from '@nestjs/common'
import { ConfigModule, ConfigObject } from '@nestjs/config'

export function mockConfig(config: ConfigObject): DynamicModule {
  return ConfigModule.forRoot({
    ignoreEnvVars: true,
    ignoreEnvFile: true,
    load: [() => config],
  })
}
