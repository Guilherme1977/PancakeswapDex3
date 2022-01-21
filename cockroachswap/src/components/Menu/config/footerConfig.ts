import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Trade'),
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: t('Win '),
    target:"_self",
    items: [
      {
        label: t('Lottery (coming soon)'),
        target:"_self",
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
    items: [
      {
        label: t('Overview (coming soon)'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections (coming soon)'),
        href: `${nftsBaseUrl}/collections`,
      },
    ],
  },
  {
    label: t('Earn'),
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
  {
    label: t('...'),
    items: [
      {
        label: t('Whitepaper '),
        target:'blank',
        href: '/images/ICC Whitepaper.pdf',
      },
    ],
  },
  // {
  //   label: t('Developers'),
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: t('Documentation'),
  //       href: 'https://docs.pancakeswap.finance',
  //     },
  //     {
  //       label: t('Bug Bounty'),
  //       href: 'https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty',
  //     },
  //     {
  //       label: t('Audits'),
  //       href: 'https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
  //     },
  //     {
  //       label: t('Careers'),
  //       href: 'https://docs.pancakeswap.finance/hiring/become-a-chef',
  //     },
  //   ],
  // },
]
