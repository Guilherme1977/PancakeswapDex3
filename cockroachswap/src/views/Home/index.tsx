import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import {  useModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import ComingSoonModal from 'views/ComingSoon/ComingSoonModal/ComingSoonModal'

import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import HowBuy from './components/Buy'
import IndustryStand from './components/industry'
import Roadmap from './components/Roadmap'
import Tockenmics from './components/tockenomics'
import ProfessionalGame from './components/ProfessionalGammer'
// import OurPartner from './components/OurPartner'
import OurPartner from './components/OurPartner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`



const Home: React.FC<{flag?:string,history?:any, location?:any, match?:any}> = (props:any) => {
    
    const { theme } = useTheme()
    const { account } = useWeb3React()
    const[flag, setFlag] = useState(false)
    
    useEffect(() => {
        if (props.flag==="coming") {
            
            setFlag(true); 
        }else if(props.location !== undefined){
            if (props.location.state === "coming") {
                // console.log("true");
                setFlag(true);
            }
        }
    }, [props])

    const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1075px' }
    const [useModalCustom] = useModal(<ComingSoonModal />)

    // const az = useModalCustom()

    const useModalCustomHandler=()=>{
        useModalCustom();
        props.history.push("/", { state: ''});
    }

  return (
    <>
        <PageMeta />
        { flag &&
            <StyledHeroSection onLoad={useModalCustomHandler}
                innerProps={{ style: { margin: '0', width: '100%' } }}
                // background={
                // theme.isDark
                //     ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
                //     : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
                // }
                index={2}
                hasCurvedDivider={false}
                style={{background:'linear-gradient(180deg, #DDEEF6 0%, rgba(221, 238, 246, 0) 100%)'}}
                className="hero-bg-section"
            >
                {account && (
                <UserBannerWrapper>
                    <UserBanner />
                </UserBannerWrapper>
                )}
                <Hero />        
            </StyledHeroSection>
            }
            { !flag &&
            <StyledHeroSection 
                innerProps={{ style: { margin: '0', width: '100%' } }}
                // background={
                // theme.isDark
                //     ? 'radial-gradient(103.12% 50% at 50% 50%, #21193A 0%, #191326 100%)'
                //     : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
                // }
                index={2}
                hasCurvedDivider={false}
                style={{background:'linear-gradient(180deg, #DDEEF6 0%, rgba(221, 238, 246, 0) 100%)'}}
                className="hero-bg-section"
            >
                {account && (
                <UserBannerWrapper>
                    <UserBanner />
                </UserBannerWrapper>
                )}
                <Hero />        
            </StyledHeroSection>
            }
            <PageSection 
                innerProps={{ style: { margin: '0', width: '100%' , } }}
                index={1}
                hasCurvedDivider={false}
                className="White-bg container buy-section"
                background="#fff"
                >
                <OurPartner />
            
            </PageSection>
            <PageSection 
                innerProps={{ style: { margin: '0', width: '100%' , } }}
                index={1}
                hasCurvedDivider={false}
                className="White-bg container buy-section"
                background="#fff"
                >
                <HowBuy />
                
            </PageSection>
            <PageSection 
                innerProps={{ style: { margin: '0', width: '100%' , } }}
                index={2}
                hasCurvedDivider={false}
                background="#fff"
                className="White-bg trade-industry-sdection">
                <IndustryStand />
            </PageSection>
            
            <PageSection
                innerProps={{ style: HomeSectionContainerStyles }}
                background={
                theme.isDark
                    ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
                    : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
                }
                index={2}
                hasCurvedDivider={false}
                // background="#fff"
                className="win-section"
            >
                <WinSection />
            </PageSection>
            <PageSection
                innerProps={{ style: { margin: '0', width: '100%' } }}
                index={2}
                className="roadmap-main White-bg"
                hasCurvedDivider={false}
            >
                <Roadmap/>
            </PageSection>
            <PageSection
                innerProps={{ style: { margin: '0', width: '100%' } }}
                index={2}
                className="tockenmics-section White-bg"
                hasCurvedDivider={false}
            >
                <Tockenmics/>
            </PageSection>
            <PageSection
                innerProps={{ style: { margin: '0', width: '100%' } }}
                index={2}
                className="game-section White-bg"
                hasCurvedDivider={false}
            >
                <ProfessionalGame/>
            </PageSection>
    </>
  )
}

export default Home
