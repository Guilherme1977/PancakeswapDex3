import React, { useState, useEffect, useMemo } from 'react'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon, useModal } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import useRefresh from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { usePriceCakeBusd } from 'state/farms/hooks'
import Balance from 'components/Balance'
import styled from 'styled-components'
import { fetchCurrentLotteryIdAndMaxBuy, fetchLottery } from 'state/lottery/helpers'
import BigNumber from 'bignumber.js'
import { getBalanceAmount } from 'utils/formatBalance'
import ComingSoonModal from 'views/ComingSoon/ComingSoonModal/ComingSoonModal'

const StyledLink = styled(Link)`
  width: 100%;
`

const StyledBalance = styled(Balance)`
  // background: ${({ theme }) => theme.colors.gradients.gold};
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: #5922c8;
`

const LotteryCardContent = () => {
  const { t } = useTranslation()
  // const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const { slowRefresh } = useRefresh()
  const [lotteryId, setLotteryId] = useState<string>(null)
  const [currentLotteryPrize, setCurrentLotteryPrize] = useState<BigNumber>(null)
  const cakePriceBusdAsString = usePriceCakeBusd().toString()
  const [useModalCustom] = useModal(<ComingSoonModal />)

  // const cakePrizesText = t('%cakePrizeInUsd% In BNB/ICC prizes this round', { cakePrizeInUsd: cakePriceBusdAsString })
  const cakePrizesText = t('', { cakePrizeInUsd: cakePriceBusdAsString })
  const [pretext, prizesThisRound] = cakePrizesText.split(cakePriceBusdAsString)

  const cakePriceBusd = useMemo(() => {
    return new BigNumber(cakePriceBusdAsString)
  }, [cakePriceBusdAsString])

  // useEffect(() => {
  //   if (isIntersecting) {
  //     setLoadData(true)
  //   }
  // }, [isIntersecting])

  useEffect(() => {
    // get current lottery ID
    const fetchCurrentID = async () => {
      const { currentLotteryId } = await fetchCurrentLotteryIdAndMaxBuy()
      setLotteryId(currentLotteryId)
    }

    if (loadData) {
      fetchCurrentID()
    }
  }, [loadData, setLotteryId])

  useEffect(() => {
    // get public data for current lottery
    const fetchCurrentLotteryPrize = async () => {
      const { amountCollectedInCake } = await fetchLottery(lotteryId)
      const prizeInBusd = cakePriceBusd.times(amountCollectedInCake)
      setCurrentLotteryPrize(prizeInBusd)
    }

    if (lotteryId) {
      fetchCurrentLotteryPrize()
    }
  }, [lotteryId, slowRefresh, setCurrentLotteryPrize, cakePriceBusd])

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="#5922C8" bold fontSize="16px" className="lottery-icon-text">
          {t('Lottery')}
        </Text>
        {pretext && (
          <Text color="#5922C8" mt="12px" bold fontSize="16px">
            {pretext}
          </Text>
        )}
        {currentLotteryPrize && currentLotteryPrize.gt(0) ? (
          <>
          </>
          // <StyledBalance
          //   fontSize="40px"
          //   bold
          //   prefix="$"
          //   decimals={0}
          //   // value={getBalanceAmount(currentLotteryPrize).toNumber()}
          //   value={126.}
          // />
        ) : (
          <>
            {/* <Skeleton width={200} height={40} my="8px" />
            <div ref={observerRef} /> */}
          </>
        )}
        <Text color="#5922C8" mb="24px" bold fontSize="16px">
          {prizesThisRound}
        </Text>
        <Text color="#5922C8" mb="40px">
          {t('Buy tickets with ICC/BNB, win ICC if your numbers match!')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        {/* <StyledLink to="/lottery" id="homepage-prediction-cta"> */}
          <Button width="100%" className="btn-theme-two" onClick={useModalCustom}>
            <Text bold color="invertedContrast">
              {t('Coming soon')}
            </Text>
            <ArrowForwardIcon ml="4px" color="invertedContrast" />
          </Button>
        {/* </StyledLink> */}
      </Flex>
    </>
  )
}

export default LotteryCardContent
