import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Win'),
    href: '/lottery',
    icon: 'Earn',
    items: [
      {
        label: t('Lottery (Coming soon)'),
        href: '/lottery',
      },
      {
        label: t('Predictions (Coming soon)'),
        href: '/prediction',
      },
    ],
  },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
      {
        label: t('Overview (Coming soon)'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections (Coming soon)'),
        href: `${nftsBaseUrl}/collections`,
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Trophy',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  // {
  //   label: t('Win'),
  //   href: '/prediction',
  //   icon: 'Trophy',
  //   items: [
  //     {
  //       label: t('Prediction (BETA)'),
  //       href: '/prediction',
  //     },
  //     {
  //       label: t('Lottery'),
  //       href: '/lottery',
  //     },
  //   ],
  // },
  
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Whitepaper'),
        target:'blank',
        href: '/images/ICC Whitepaper.pdf',
      },
      // {
      //   label: t('Info'),
      //   href: '/info',
      // },
      // {
      //   label: t('IFO'),
      //   href: '/ifo',
      // },
      // {
      //   label: t('Voting'),
      //   href: '/voting',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Leaderboard'),
      //   href: '/teams',
      // },
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
      // {
      //   label: t('Docs'),
      //   href: 'https://docs.pancakeswap.finance',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
    ],
  },
]

export default config
