import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import {  Heading, Box, Button, Flex, CopyIcon } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { CompositeImageProps } from './CompositeImage'
import bannerimg from '../images/new-bunny.png'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const Wrapper = styled(Flex)`
  align-items: center;
  position: relative;
`

const Address = styled.div`
  flex: 1;
  position: relative;
  padding-right: 8px;

  & > input {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.text};
    display: block;
    font-weight: 600;
    font-size: 16px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }
`

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'inline-block' : 'none')};
  position: absolute;
  padding: 8px;
  top: -38px;
  right: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
  width: 100px;
`


const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false)
  
  const copyAddress = (address) => {
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(address).then(() => displayTooltip())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = address
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip()
    }
  }

  function displayTooltip() {
    setIsTooltipDisplayed(true)
    setTimeout(() => {
      setIsTooltipDisplayed(false)
    }, 1000)
  }

  return (
    <>
      {/* <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper> */}
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="flex-start"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column" maxWidth="50%" className="hero-txt-col">
          <Heading scale="xxl" color="secondary" className="black-title heading-title" mb="5px">
            {t('The galaxy is run by ')}
          </Heading>
          <Heading scale="xxl" color="secondary" className="heading-title" mb="5px">
            {t('the Intergalactic Cockroach.')}
          </Heading>
          {/* <Heading scale="xxl" color="secondary" mb="24px" className="black-title heading-title">
            {t('Cockroach.')}
          </Heading> */}
          <Heading scale="md" mb="24px" className="txt-hero">
            {t('Trade, win & Play2Earn crypto on the decentralized kingdom of the Intergalactic Cockroach. ')}
          </Heading>
          <Flex className="btn-hero">
            <div style={{marginTop:20}}>
              <a href="https://pancakeswap.finance/swap?outputCurrency=0x8D672014Fb107cB409dCcd9042DdA3b97313F4C3" rel="noreferrer" target="_blank" >
                <Button className="btn btn-theme" mr="8px"> {t('Buy ICC on Pancake')}
                  <span><img src="/logo_transparent.png" alt="Pancake_logo" style={{width:"18px", verticalAlign:'middle', position:'relative', top:'-2px', marginLeft:'4px'}}/></span>
                </Button>
              </a>
            </div>
            <div style={{marginTop:20}}>
              <Link to="/swap" className="btn-outline">
                <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
              </Link>
            </div>
          </Flex>
          <Flex className="btn-hero1">
            <div style={{marginTop:20, position: 'relative'}}>
              {/* {!account && <ConnectWalletButton mr="8px" />} */}
                {/* <Box position="relative"> */}
                  <Wrapper>
                    <p>Contract Address:</p>
                    <Address title="ICC address">
                      0x8D6....F4C3
                    </Address>
                    <CopyIcon width="17px" className="theme-svg-color-custom" onClick={() => copyAddress("0x8D672014Fb107cB409dCcd9042DdA3b97313F4C3")} />
                  </Wrapper>
                  <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{t('Copied')}</Tooltip>
                {/* </Box> */}
            </div>
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
          className="bannerImgslide"
        >
          {/* <BunnyWrapper>
            <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('Lunar bunny')} />
          </BunnyWrapper> */}
          <BunnyWrapper className="hero-banner-fix">
            <img src={bannerimg} alt={t('Lunar bunny')} />
          </BunnyWrapper>
          {/* <StarsWrapper>
            <CompositeImage {...starsImage} />
          </StarsWrapper> */}
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
