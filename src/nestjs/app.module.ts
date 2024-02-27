import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphqlSchemaModule } from './graphql/graphql-schema.module'
import { HealthModule } from './health/health.module'
import { TestModule } from '../test/test.module'
import { ToglsModule } from '../togls/togls.module'

@Module({
  imports: [GraphqlSchemaModule, ConfigModule.forRoot(), HealthModule, TestModule, ToglsModule],
})
export class AppModule {}
