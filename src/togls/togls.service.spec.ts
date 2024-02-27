import { Test, TestingModule } from '@nestjs/testing'
import { mockConfig } from '../mock-config'
import { ToglsService } from './togls.service'

const refresh = jest.fn()
const init = jest.fn()
const isOn = jest.fn()

jest.mock('@uptechworks/uptech-growthbook-sdk-typescript', () => {
  return {
    UptechGrowthBookTypescriptWrapper: jest.fn().mockImplementation(() => {
      return { refresh, init, isOn }
    }),
  }
})

describe('ToglsService', () => {
  let service: ToglsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        mockConfig({ GROWTHBOOK_API_HOST: 'GROWTHBOOK_API_HOST', GROWTHBOOK_CLIENT_KEY: 'GROWTHBOOK_CLIENT_KEY' }),
      ],
      providers: [ToglsService],
    }).compile()

    service = module.get<ToglsService>(ToglsService)
  })

  describe('#refresh', () => {
    beforeEach(() => {
      service.refresh()
    })

    it('is a pass through', () => {
      expect(refresh).toHaveBeenCalled()
    })
  })

  describe('#init', () => {
    const params = { some: 'params' }

    beforeEach(async () => {
      await service.init(params)
    })

    it('is a pass through', () => {
      expect(init).toHaveBeenCalledWith(params)
    })
  })

  describe('#isSendContributionRefactorOn', () => {
    let response: boolean

    beforeEach(async () => {
      isOn.mockReturnValue(true)
      response = service.isTestOn
    })

    it('checks the togl', () => {
      expect(isOn).toHaveBeenCalledWith(ToglsService.test)
    })

    it('is true if the togl is on', () => {
      expect(response).toBeTruthy()
    })
  })
})
