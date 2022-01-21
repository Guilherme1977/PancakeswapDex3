import React, { useEffect, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Helmet } from 'react-helmet-async'
import { useMatchBreakpoints, useModal } from '@pancakeswap/uikit'
import { useAppDispatch } from 'state'
import { useGetPredictionsStatus, useIsChartPaneOpen } from 'state/predictions/hooks'
import { useInitialBlock } from 'state/block/hooks'
import { initializePredictions } from 'state/predictions'
import { PredictionStatus } from 'state/types'
import { useUserPredictionAcceptedRisk, useUserPredictionChartDisclaimerShow } from 'state/user/hooks'
import PageLoader from 'components/Loader/PageLoader'
import { PageMeta } from 'components/Layout/Page'
import usePollOraclePrice from './hooks/usePollOraclePrice'
import usePollPredictions from './hooks/usePollPredictions'
import Container from './components/Container'
import CollectWinningsPopup from './components/CollectWinningsPopup'
import SwiperProvider from './context/SwiperProvider'
import Desktop from './Desktop'
import Mobile from './Mobile'
import RiskDisclaimer from './components/RiskDisclaimer'
import ChartDisclaimer from './components/ChartDisclaimer'

import Herobanner from './components/HeroBanner'
import BuyTicket from './components/Buyticket'
import ConnectWallet from './components/ConnectWallet'
import FinishPred from './components/Finishround'
import Playsection from './components/HowPlay'
import ComingSoonModal from '../ComingSoon/ComingSoonModal/ComingSoonModal';
// import {
//     TITLE_BG,
//     GET_TICKETS_BG,
//     FINISHED_ROUNDS_BG,
//     FINISHED_ROUNDS_BG_DARK,
//     CHECK_PRIZES_BG,
//   } from '../Lottery/pageSectionStyles'

// import PageSection from 'components/PageSection'
// import Hero from './Hero'

const Predictions = () => {
  const { isDesktop } = useMatchBreakpoints()
  const [hasAcceptedRisk, setHasAcceptedRisk] = useUserPredictionAcceptedRisk()
  const [showDisclaimer] = useUserPredictionChartDisclaimerShow()
  const { account } = useWeb3React()
  const status = useGetPredictionsStatus()
  const isChartPaneOpen = useIsChartPaneOpen()
  const dispatch = useAppDispatch()
  const initialBlock = useInitialBlock()
  const handleAcceptRiskSuccess = () => setHasAcceptedRisk(true)
  const [onPresentRiskDisclaimer] = useModal(<RiskDisclaimer onSuccess={handleAcceptRiskSuccess} />, false)
  const [onPresentChartDisclaimer] = useModal(<ChartDisclaimer />, false)

  // TODO: memoize modal's handlers
  const onPresentRiskDisclaimerRef = useRef(onPresentRiskDisclaimer)
  const onPresentChartDisclaimerRef = useRef(onPresentChartDisclaimer)
  const [useModalCustom] = useModal(<ComingSoonModal />)

  // Disclaimer
  useEffect(() => {
    if (!hasAcceptedRisk) {
      onPresentRiskDisclaimerRef.current()
    }
  }, [hasAcceptedRisk, onPresentRiskDisclaimerRef])

  // Chart Disclaimer
  useEffect(() => {
    if (isChartPaneOpen && showDisclaimer) {
      onPresentChartDisclaimerRef.current()
    }
  }, [onPresentChartDisclaimerRef, isChartPaneOpen, showDisclaimer])

  useEffect(() => {
    if (initialBlock > 0) {
      // Do not start initialization until the first block has been retrieved
      dispatch(initializePredictions(account))
    }
  }, [initialBlock, dispatch, account])

  usePollPredictions()
  usePollOraclePrice()

  if (status === PredictionStatus.INITIAL) {
    return <PageLoader />
  }

  return (
    <>
      <Helmet>
        <script src="https://s3.tradingview.com/tv.js" type="text/javascript" id="tradingViewWidget" />
      </Helmet>
      <PageMeta />
      <div className="play-main-wrapper">
        <Herobanner />
        <BuyTicket />
        <ConnectWallet />
        {/* <Finishround /> */}
        <FinishPred />
        <Playsection />
      </div>
      {/* <SwiperProvider>
            <Container>
            {isDesktop ? <Desktop /> : <Mobile />}
            <CollectWinningsPopup />
            </Container>
      </SwiperProvider> */}
    </>
  )
}

export default Predictions
