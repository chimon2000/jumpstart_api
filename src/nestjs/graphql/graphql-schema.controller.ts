import { GraphQLSchemaService } from './graphql-schema.service'
import { Controller, Get } from '@nestjs/common'

@Controller()
export class GraphQLSchemaController {
  constructor(private readonly service: GraphQLSchemaService) {}

  @Get('/graphql')
  public get(): string {
    return this.service.get()
  }
}
