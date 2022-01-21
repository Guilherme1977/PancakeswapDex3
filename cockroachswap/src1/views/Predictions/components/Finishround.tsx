import React, { useState } from 'react'
import '../../Home/components/style.css'
// import { Link } from 'react-router-dom'
import { Box, Flex, Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import PageSection from 'components/PageSection'
// import dollarIcon from '../../Home/images/dollar.png'
// import poundIcon from '../../Home/images/p.png'

import HistoryTabMenu from './HistoryTabMenu'

import YourHistoryCard from './YourHistoryCard'
import AllHistoryCard from './AllHistoryCard'
import useShowMoreUserHistory from '../hooks/useShowMoreUserRounds'

import {
  // TITLE_BG,
  // GET_TICKETS_BG,
  FINISHED_ROUNDS_BG,
  FINISHED_ROUNDS_BG_DARK,
  // CHECK_PRIZES_BG,
} from './pageSectionStyles'

const FinishPred = () => {
  const { t } = useTranslation()
  const { isDark, theme } = useTheme()
  const [historyTabMenuIndex, setHistoryTabMenuIndex] = useState(0)
  const { numUserRoundsRequested, handleShowMoreUserRounds } = useShowMoreUserHistory()
  return (
    <>
      <section className="finish-section">
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%', paddingBottom: '250px' } }}
          // background={isDark ? FINISHED_ROUNDS_BG_DARK : FINISHED_ROUNDS_BG}
          hasCurvedDivider={false}
          index={2}
          className="finish-bg-area"
        >
          {/* <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
                <Heading mb="24px" scale="xl" className="pred-finish-title">
                    {t('Finished Rounds')}
                </Heading>
                <Box mb="24px">
                    <></>
                </Box>
                </Flex> */}

          {/* Copy tabs  */}
          <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading mb="24px" scale="xl" className="title">
              {t('Finished Rounds')}
            </Heading>
            <Box mb="24px">
              <HistoryTabMenu
                activeIndex={historyTabMenuIndex}
                setActiveIndex={(index) => setHistoryTabMenuIndex(index)}
              />
            </Box>
            {historyTabMenuIndex === 0 ? (
              <AllHistoryCard />
            ) : (
              <YourHistoryCard
                handleShowMoreClick={handleShowMoreUserRounds}
                numUserRoundsRequested={numUserRoundsRequested}
              />
            )}
          </Flex>
        </PageSection>
      </section>
    </>
  )
}
export default FinishPred
