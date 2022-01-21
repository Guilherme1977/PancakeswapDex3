import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Text, Skeleton, Button, ArrowForwardIcon, Heading, useModal } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import useRefresh from 'hooks/useRefresh'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { getTotalWon } from 'state/predictions/helpers'
import { useBNBBusdPrice } from 'hooks/useBUSDPrice'
import { multiplyPriceByAmount } from 'utils/prices'
import ComingSoonModal from 'views/ComingSoon/ComingSoonModal/ComingSoonModal'

const StyledLink = styled(Link)`
  width: 100%;
`

const PredictionCardContent = () => {
  const { t } = useTranslation()
  const { slowRefresh } = useRefresh()
  // const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const bnbBusdPrice = useBNBBusdPrice()
  const [bnbWon, setBnbWon] = useState(0)
  const bnbWonInUsd = multiplyPriceByAmount(bnbBusdPrice, bnbWon)
  const [useModalCustom] = useModal(<ComingSoonModal />)

  const localisedBnbUsdString = formatLocalisedCompactNumber(bnbWonInUsd)
  const bnbWonText = t('$%bnbWonInUsd% in BNB won so far', { bnbWonInUsd: localisedBnbUsdString })
  //   const [pretext, wonSoFar] = bnbWonText.split(localisedBnbUsdString)
  const [pretext] = bnbWonText.split(localisedBnbUsdString)

  // useEffect(() => {
  //   if (isIntersecting) {
  //     setLoadData(true)
  //   }
  // }, [isIntersecting])

  useEffect(() => {
    const fetchMarketData = async () => {
      const totalWon = await getTotalWon()
      setBnbWon(totalWon)
    }

    if (loadData) {
      fetchMarketData()
    }
  }, [slowRefresh, loadData])

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text color="#fff" bold fontSize="16px" className="prediction-icon-text">
          {/* {t('Prediction')} */}
          {t('Prediction ')}
        </Text>
        {bnbWonInUsd ? (
          <></>
          // <Heading color="#FFC534" my="8px" scale="xl" bold>
          //   {pretext}
          //   {localisedBnbUsdString}
          // </Heading>
        ) : (
          <>
            {/* <Skeleton width={230} height={40} my="8px" />
            <div ref={observerRef} /> */}
          </>
        )}
        {/* <Text color="#280D5F" mb="24px" bold fontSize="16px">
          {wonSoFar}
        </Text> */}
        <Text color="#fff" mb="40px" mt="30px" maxWidth="80%">
          {t('Will BNB price rise or fall? guess correctly to win!')}
        </Text>
        {/* <Text color="#280D5F" mb="40px">
          {t('Lorem Ipsum is simply dummyLorem Ipsum is simply dummy')}
        </Text> */}
        {/* <Text color="#280D5F" mb="40px">
          {t('Will BNB price rise or fall? guess correctly to win!')}
        </Text> */}
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        {/* <StyledLink to="/prediction" id="homepage-prediction-cta"> */}
          <Button width="100%" className="btn-theme-two" onClick={useModalCustom}>
            {/* <Text bold color="invertedContrast">
              {t('Play')}
            </Text> */}
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

export default PredictionCardContent
