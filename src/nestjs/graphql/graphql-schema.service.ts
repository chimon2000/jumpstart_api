import { Injectable } from '@nestjs/common'
import { GraphQLSchemaHost } from '@nestjs/graphql'
import { printSchema } from 'graphql'

@Injectable()
export class GraphQLSchemaService {
  constructor(private schemaHost: GraphQLSchemaHost) {}

  public get(): string {
    const { schema } = this.schemaHost

    return printSchema(schema)
  }
}
