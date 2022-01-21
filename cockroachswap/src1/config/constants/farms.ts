import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'ICC',
    lpAddresses: {
      97: '',
      56: '0x8d672014fb107cb409dccd9042dda3b97313f4c3',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ICC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac141bb591b23f9ec3681decd28fe35db599cf16',
    },
    token: serializedTokens.icc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x38eDe1996b5D8A77A2068fDaA3A836c9C90c3332',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
]

export default farms
