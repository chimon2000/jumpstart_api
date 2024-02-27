import { Test } from '@nestjs/testing'
import { mockConfig } from '../mock-config'
import { TestModule } from './test.module'

describe('TestModule', () => {
  it('compiles the module', async () => {
    const module = await Test.createTestingModule({
      imports: [
        TestModule,
        mockConfig({
          AWS_COGNITO_USER_POOL_ID: 'us-west-2_5zGWaBOwQ',
          AWS_COGNITO_CLIENT_ID: 'ClientId',
        }),
      ],
    }).compile()

    expect(module).toBeDefined()
  })
})
