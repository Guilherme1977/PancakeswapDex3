import React from 'react'
import styled from 'styled-components'
import { Flex, Text, TicketFillIcon, PredictionsIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import ColoredWordHeading from '../ColoredWordHeading'
import IconCard, { IconCardData } from '../IconCard'
import PredictionCardContent from './PredictionCardContent'
import LotteryCardContent from './LotteryCardContent'
import CompositeImage from '../CompositeImage'




const TransparentFrame = styled.div<{ isDark: boolean }>`
  background: ${({ theme }) => (theme.isDark ? 'rgba(8, 6, 11, 0.6)' : ' rgba(255, 255, 255, 0.6)')};
  padding: 16px;
  // border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 60px;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const BottomLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  bottom: -64px;
  max-width: 192px;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 100%;
  }
`

const TopRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  top: -64px;

  max-width: 192px;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 100%;
  }
`

const PredictionCardData: IconCardData = {
  // icon: <PredictionsIcon width="36px" color="inverseContrast" />,
  icon: <img src="images/seo-report1.svg" alt="PredictionCard" />,
  // background: 'linear-gradient(180deg, #ffb237 0%, #ffcd51 51.17%, #ffe76a 100%);',
  background: '#5922C8',
  borderColor: '#5922C8',
  // background: '#FFEA7D',
  rotation: '9.55deg',
}

const LotteryCardData: IconCardData = {
  // icon: <TicketFillIcon color="white" width="36px" />,
  icon: <img src="images/lottery-game1.svg" alt="PredictionCard" />,
  // background: ' linear-gradient(180deg, #7645D9 0%, #5121B1 100%);',
  background: '#FFEA7D',
  borderColor: '#FFEA7D',
  rotation: '-6.57deg',
}

const bottomLeftImage = {
  path: '/images/home/prediction-cards/',
  attributes: [
    { src: 'bottom-left', alt: 'CAKE card' },
    { src: 'green', alt: 'Green CAKE card with up arrow' },
    { src: 'red', alt: 'Red Cake card with down arrow' },
    { src: 'top-right', alt: 'CAKE card' },
  ],
}

const topRightImage = {
  path: '/images/home/lottery-balls/',
  attributes: [
    { src: '2', alt: 'Lottery ball number 2' },
    { src: '4', alt: 'Lottery ball number 4' },
    { src: '6', alt: 'Lottery ball number 6' },
    { src: '7', alt: 'Lottery ball number 7' },
    { src: '9', alt: 'Lottery ball number 9' },
  ],
}

const WinSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <BottomLeftImgWrapper>
          <CompositeImage {...bottomLeftImage} />
        </BottomLeftImgWrapper>
        <TopRightImgWrapper>
          <CompositeImage {...topRightImage} />
        </TopRightImgWrapper>
      </BgWrapper>
      <TransparentFrame isDark={theme.isDark} className="win-card-wrapper">
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          {/* <ColoredWordHeading textAlign="center" text={t('Win millions in prizes')} /> 
          <Text color="textSubtle">{t('Provably fair, on-chain games.')}</Text>
            <Text mb="40px" color="textSubtle">
            {t('Win big with PancakeSwap.')}
          </Text>
          */}
          <ColoredWordHeading textAlign="center" text={t('Win BNB & ICC in prizes !')}  />
          {/* <Text mb="40px"  color="textSubtle">{t('Provably fair, on-chain games. | Win big with The Intergalactic Cockroach.| Whole block is not designed as needed. | Icons are not the same | Buttons also not correct need to chage to Coming soon | Lottery assets such as cards are not used the Cockroach developer used the original from the website.')}</Text> */}
          <Text mb=""  color="textSubtle">{t('Provably fair, on-chain games.')}</Text>
          <Text mb="" className="mb-50 text-win"  color="textSubtle">{t('Win big with The Intergalactic Cockroach.')}</Text>
          <Flex m="0 auto" flexDirection={['column', null, null, 'row']} maxWidth="865px" className="trad-card-wrapper">
            <Flex flex="1" maxWidth={['275px', null, null, '100%']} 
              mr={[null, null, null, '30px']}>
              <IconCard {...LotteryCardData} className="full-height lottery-card">
                <LotteryCardContent />
              </IconCard>
            </Flex>
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '0']}
              ml={[null, null, null, '30px']}
              mb={['32px', null, null, '0']}
              className="full-height"
              >
              <IconCard {...PredictionCardData} className="predic-card">
                <PredictionCardContent />
              </IconCard>
            </Flex>
          </Flex>
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default WinSection
