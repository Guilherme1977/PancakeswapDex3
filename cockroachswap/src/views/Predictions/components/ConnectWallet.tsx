import React from 'react'
import '../../Home/components/style.css'
// import { Link } from 'react-router-dom'
import { Flex, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
// import PageSection from 'components/PageSection'
import ticketL from '../../Home/images/ticket-l.png'
import ticketR from '../../Home/images/ticket-r.png'

export default function ConnectWallet() {
  const { t } = useTranslation()
  return (
    <>
      <section className="connectwallet-section">
        {/* <PageSection
                innerProps={{ style: { margin: '0', width: '100%' } }}
                index={1}
                concaveDivider
                dividerPosition="top"
            >
                <></>
            </PageSection> */}
        <Flex
          position="relative"
          flexDirection={['column-reverse', null, null, 'row']}
          alignItems={['flex-end', null, null, 'center']}
          justifyContent="center"
          className=""
        >
          <Flex flex="1" flexDirection="column">
            <div className="wallet-wrapper">
              <div className="dlr-left">
                <img src={ticketR} className="img-fluid dlr-icon" alt="dollarIcon" />
              </div>
              <div className="hero-wrapper text-center">
                <h2>{t('Connect your wallet to check if you`ve won!')}</h2>
                <Button className="btn btn-theme-two">Connect Wallet</Button>
              </div>
              <div className="right-pound">
                <img src={ticketL} className="img-fluid dlr-icon" alt="dollarIcon" />
              </div>
            </div>
          </Flex>
        </Flex>
      </section>
    </>
  )
}
