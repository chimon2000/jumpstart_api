import { Test, TestingModule } from '@nestjs/testing'
import { GraphQLSchemaController } from './graphql-schema.controller'
import { GraphQLSchemaService } from './graphql-schema.service'

describe('GraphQLSchemaController', () => {
  let graphqlSchemaController: GraphQLSchemaController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GraphQLSchemaController],
      providers: [
        {
          provide: GraphQLSchemaService,
          useValue: {
            get: () => 'schema',
          },
        },
      ],
    }).compile()

    graphqlSchemaController = app.get<GraphQLSchemaController>(GraphQLSchemaController)
  })

  describe('hello', () => {
    it('should return version', () => {
      const graphqlSchemaResponse = graphqlSchemaController.get()
      expect(graphqlSchemaResponse).toEqual('schema')
    })
  })
})
