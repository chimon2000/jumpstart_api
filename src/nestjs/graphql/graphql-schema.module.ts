import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { GraphQLSchemaController } from './graphql-schema.controller'
import { GraphQLSchemaService } from './graphql-schema.service'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context: ({ req }: any) => ({ req }),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [GraphQLSchemaController],
  providers: [GraphQLSchemaService],
})
export class GraphqlSchemaModule {}
