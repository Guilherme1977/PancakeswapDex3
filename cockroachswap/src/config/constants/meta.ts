import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Intergalactic Cockroach',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home Page')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Intergalactic Cockroach Info & Analytics')}`,
        description: 'View statistics for Intergalactic Cockroach exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Intergalactic Cockroach Info & Analytics')}`,
        description: 'View statistics for Intergalactic Cockroach exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Intergalactic Cockroach Info & Analytics')}`,
        description: 'View statistics for Intergalactic Cockroach exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Intergalactic Cockroach')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Intergalactic Cockroach')}`,
      }
    default:
      return null
  }
}
