import { Test } from '@nestjs/testing'
import { AppModule } from './app.module'
import { mockConfig } from '../mock-config'

describe('AppModule', () => {
  it('compiles the module', async () => {
    const module = await Test.createTestingModule({
      imports: [
        AppModule,
        mockConfig({
          AWS_COGNITO_USER_POOL_ID: 'us-west-2_5zGWaBOwQ',
          AWS_COGNITO_CLIENT_ID: 'ClientId',
          GROWTHBOOK_API_HOST: '123',
          GROWTHBOOK_CLIENT_KEY: '223',
        }),
      ],
    }).compile()
    expect(module).toBeDefined()
  })
})
