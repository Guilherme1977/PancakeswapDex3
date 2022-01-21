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
      56: '0x8D672014Fb107cB409dCcd9042DdA3b97313F4C3',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ICC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xAC141Bb591B23f9Ec3681deCd28FE35db599CF16',
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
