import React from 'react'
import styled, { keyframes } from 'styled-components'
import '../../Home/components/style.css'
// import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Skeleton, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

export default function Herobanner() {
  const mainTicketAnimation = keyframes`
from {
  transform: rotate(0deg);
}
50% {
  transform: rotate(6deg);
}
to {
  transform: rotate(0deg);
}  
`
  // const TicketContainer = styled(Flex)`
  //   animation: ${mainTicketAnimation} 3s ease-in-out infinite;
  // `
  // const PrizeTotalBalance = styled(Balance)`
  //   background: ${({ theme }) => theme.colors.gradients.gold};
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // `
  // const PrizeTotalBalance = styled(Balance)`
  //   background: ${({ theme }) => theme.colors.gradients.gold};
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  // `

  const floatingStarsLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }  
`

  const floatingStarsRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 10px);
  }
  to {
    transform: translate(0, -0px);
  }  
`

  const floatingTicketLeft = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }  
`

  const floatingTicketRight = keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(10px, 15px);
  }
  to {
    transform: translate(0, -0px);
  }  
`
  const Decorations = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(/images/decorations/bg-star.svg);
    background-repeat: no-repeat;
    background-position: center 0;
  `
  const StarsDecorations = styled(Box)`
    position: absolute;
    width: 100%;
    height: 100%;

    & img {
      position: absolute;
    }

    & :nth-child(1) {
      animation: ${floatingStarsLeft} 3s ease-in-out infinite;
      animation-delay: 0.25s;
    }
    & :nth-child(2) {
      animation: ${floatingStarsLeft} 3.5s ease-in-out infinite;
      animation-delay: 0.5s;
    }
    & :nth-child(3) {
      animation: ${floatingStarsRight} 4s ease-in-out infinite;
      animation-delay: 0.75s;
    }
    & :nth-child(4) {
      animation: ${floatingTicketLeft} 6s ease-in-out infinite;
      animation-delay: 0.2s;
    }
    & :nth-child(5) {
      animation: ${floatingTicketRight} 6s ease-in-out infinite;
    }

    ${({ theme }) => theme.mediaQueries.sm} {
      & :nth-child(1) {
        left: 3%;
        top: 42%;
      }
      & :nth-child(2) {
        left: 9%;
        top: 23%;
      }
      & :nth-child(3) {
        right: 2%;
        top: 24%;
      }
      & :nth-child(4) {
        left: 8%;
        top: 67%;
      }
      & :nth-child(5) {
        right: 8%;
        top: 67%;
      }
    }

    ${({ theme }) => theme.mediaQueries.md} {
      & :nth-child(1) {
        left: 10%;
        top: 42%;
      }
      & :nth-child(2) {
        left: 17%;
        top: 23%;
      }
      & :nth-child(3) {
        right: 10%;
        top: 24%;
      }
      & :nth-child(4) {
        left: 27%;
        top: 67%;
      }
      & :nth-child(5) {
        right: 17%;
        top: 67%;
      }
    }

    ${({ theme }) => theme.mediaQueries.xl} {
      & :nth-child(1) {
        left: 29%;
        top: 42%;
      }
      & :nth-child(2) {
        left: 35%;
        top: 23%;
      }
      & :nth-child(3) {
        right: 29%;
        top: 24%;
      }
      & :nth-child(4) {
        left: 34%;
        top: 67%;
      }
      & :nth-child(5) {
        right: 34%;
        top: 67%;
      }
    }
  `
  const { t } = useTranslation()
  return (
    <>
      <section className="hero-Slide">
        <Flex flexDirection="column" alignItems="center" justifyContent="center" className="hero-star-icon">
          <Decorations />
          <StarsDecorations display={['none', 'none', 'block']}>
            <img src="/images/lottery/star-big.png" width="124px" height="109px" alt="" />
            <img src="/images/lottery/star-small.png" width="70px" height="62px" alt="" />
            <img src="/images/lottery/three-stars.png" width="130px" height="144px" alt="" />
            <img src="/images/lottery/ticket-l.png" width="123px" height="83px" alt="" />
            <img src="/images/lottery/ticket-r.png" width="121px" height="72px" alt="" />
          </StarsDecorations>
        </Flex>
        <Flex
          position="relative"
          flexDirection={['column-reverse', null, null, 'row']}
          alignItems={['flex-end', null, null, 'center']}
          justifyContent="center"
        >
          <Flex flex="1" flexDirection="column">
            <div className="hero-container">
              <div className="hero-wrapper">
                <h2>The PancakeSwap Lottery </h2>
                <h1>$ 139.450</h1>
                <h3>in prizes!</h3>
                <div className="btn-area">
                  <Button className="btn btn-theme-two">Connect Wallet</Button>
                </div>
              </div>
            </div>
          </Flex>
        </Flex>
      </section>
    </>
  )
}
