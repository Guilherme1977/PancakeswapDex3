import React from 'react'
import '../../Home/components/style.css'
// import { Link } from 'react-router-dom'
import { Flex, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import downArrow from '../../Home/images/down-arrow.svg'

export default function BuyTicket() {
  const { t } = useTranslation()
  return (
    <>
      <section className="ticket-section">
        <Flex
          position="relative"
          flexDirection={['column-reverse', null, null, 'row']}
          alignItems={['flex-end', null, null, 'center']}
          justifyContent="center"
          className="Ticket-flex"
        >
          <Flex flex="1" flexDirection="column" className="full-col">
            <div className="ticket--container ">
              <div className="ticket-title">
                <h2>{t('Get your tickets now !')}</h2>
                <h1>
                  11<sub>h</sub> 50<sub>m</sub> <span>urill the draw</span>
                </h1>
              </div>
              <div className="ticket-card">
                <div className="ticket-header">
                  <p className="label">{t('Next Draw')}</p>
                  <span className="light-txt">{t('#292 | Draw: Nov 26, 2021, 3:00 AM')} </span>
                </div>
                <div className="ticket-body">
                  <ul className="ticket-list">
                    <li>
                      <div className="left-col">
                        <p className="label">Prize Pat</p>
                      </div>
                      <div className="right-col">
                        <h5 className="">~$135,123</h5>
                        <p>urill the draw</p>
                      </div>
                    </li>
                    <li>
                      <div className="left-col">
                        <p className="label">Your Tickats</p>
                      </div>
                      <Button className="btn btn-theme-two">Buy Tickets</Button>
                    </li>
                  </ul>
                  <div className="ticket-footer">
                    <Button className="">
                      Details <img src={downArrow} className="img-fluid" alt="img" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Flex>
      </section>
    </>
  )
}
