import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { mockConfig } from '../src/mock-config'
import * as request from 'supertest'
import { AppModule } from '../src/nestjs/app.module'

describe('HealthController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        mockConfig({
          AWS_COGNITO_USER_POOL_ID: 'us-west-2_5zGWaBOwQ',
          AWS_COGNITO_CLIENT_ID: 'ClientId',
          AWS_COGNITO_REGION: 'us-west-2',
        }),
      ],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/health (GET)', () => {
    return request(app.getHttpServer()).get('/health').expect(200)
  })

  it('/graphql health(GQL)', () => {
    return request(app.getHttpServer()).post('/graphql').send({ query: '{ health { version }}' }).expect(200)
  })
})
