import React, { useState } from 'react'
import '../../Home/components/style.css'
// import { Link } from 'react-router-dom'
import { Box, Flex, Heading, Skeleton, Button, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import PageSection from 'components/PageSection'
import img4 from '../../Home/images/4.svg'
import img1 from '../../Home/images/1.svg'
import img3 from '../../Home/images/3.svg'
import imga from '../../Home/images/a.svg'
import img3c from '../../Home/images/3-c.svg'
import img1c from '../../Home/images/1-c.svg'
import user from '../../Home/images/user1.svg'
import tcount from '../../Home/images/top-count.png'
import bcount from '../../Home/images/btm-count.png'
import graph from '../../Home/images/Graph.png'
import tombola1 from '../../Home/images/tombola1.png'

export default function Playsection() {
  const { t } = useTranslation()
  return (
    <>
      <section className="play-section">
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
          hasCurvedDivider={false}
          index={2}
          background="transparent"
          className="play-n-top"
        >
          <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
            <Heading mb="24px" scale="xl" className="pred-finish-title">
              {t('How to play ')}
            </Heading>
            <Text className="txt-lrem">
              <p className="black-text">
                {t(
                  'If the digits on your tickets match the winning numbers in the correct order, you win a portion of the prize pool.Simple!',
                )}
              </p>
            </Text>
            <Box mb="24px">
              <></>
            </Box>
          </Flex>
        </PageSection>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          hasCurvedDivider={false}
          index={2}
          className="p-0 prizer-card-wrapp"
        >
          <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
            className="playrow-flex"
          >
            <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
              <div className="card-play">
                <h4 className="txt-v">Step1</h4>
                <h3 className="">Buy Tickets</h3>
                <p>Prices are set when the round starts, equal to 5 USD in CAKE per ticket.</p>
              </div>
            </Flex>
            <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
              <div className="card-play">
                <h4 className="txt-v">Step2</h4>
                <h3 className="">Wait for the Draw</h3>
                <p>There are two draws every day: one every 12 hours.</p>
              </div>
            </Flex>
            <Flex width="100%" flexDirection="column" alignItems="center" justifyContent="center">
              <div className="card-play">
                <h4 className="txt-v">Step3</h4>
                <h3 className="blue-light">Check for Prizes</h3>
                <p>Lorem Ipsum has been the industry`s standard dummy text industry`s standard</p>
              </div>
            </Flex>
          </Flex>
        </PageSection>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          hasCurvedDivider={false}
          index={2}
          className="p-0 winig-sec-main"
        >
          <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="flex-start"
            className="play-list-section winning-sec row-reverse-md"
          >
            <Flex flex="1.5" width="100%" flexDirection="column" alignItems="left" justifyContent="flex-start">
              <div className="left-play-content">
                <Heading mb="15px" scale="xl" className="pred-finish-title text-left">
                  {t('Winning Criteria')}
                </Heading>
                <Text className="txt-lrem text-left" mb="25px">
                  <p className="black-text">{t('The digits on your ticket must match in the correct order to win.')}</p>
                </Text>
                <Text className="txt-lrem text-left">
                  <p className="light-txt">{t('Here’s an example lottery draw, with two tickets, A and B.')}</p>
                </Text>
                <Box mb="24px">
                  <></>
                </Box>
                <ul className="lg-howPlay-play">
                  <li>
                    <p>
                      {t(
                        'Ticket A: The first 3 digits and the last 2 digits match, but the 4th digit is wrong, so this ticket only wins a “Match first 3” prize.',
                      )}
                    </p>
                  </li>
                  <li>
                    <p>
                      {t(
                        'Ticket B: Even though the last 5 digits match, the first digit is wrong, so this ticket doesn’t win a prize.',
                      )}
                    </p>
                  </li>
                </ul>
                <Text className="txt-lrem text-left">
                  <p className="light-txt">
                    {t(
                      'Prize brackets don’t ‘stack’: if you match the first 3 digits in order, you’ll only win prizes from the ‘Match 3’ bracket, and not from ‘Match 1’ and ‘Match 2’.',
                    )}
                  </p>
                </Text>
              </div>
            </Flex>
            <Flex flex="1" width="100%" flexDirection="column" alignItems="left" justifyContent="flex-start">
              <div className="play-rate-card">
                <ul className="rate-list">
                  <li>
                    <img src={img4} className="img-fluid" alt="img1" />
                  </li>
                  <li>
                    <img src={img1} className="img-fluid" alt="img1" />
                  </li>
                  <li>
                    <img src={img3} className="img-fluid" alt="img1" />
                  </li>
                  <li>
                    <img src={imga} className="img-fluid" alt="img1" />
                  </li>
                  <li>
                    <img src={img3c} className="img-fluid" alt="img3c" />
                  </li>
                  <li>
                    <img src={img1c} className="img-fluid" alt="img1c" />
                  </li>
                </ul>
                <div className="play-body">
                  <div className="play-list-number">
                    <div className="user-count-icon">
                      <img src={user} className="img-fluid" alt="img" />
                      <div>
                        <div className="nmb-count-top">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                        </div>
                        <div className="btm-list-count">
                          <img src={tcount} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="user-count-icon">
                      <img src={user} className="img-fluid" alt="img" />
                      <div>
                        <div className="nmb-count-top">
                          <span>1</span>
                          <span>2</span>
                          <span>3</span>
                          <span>4</span>
                          <span>5</span>
                          <span>6</span>
                        </div>
                        <div className="btm-list-count">
                          <img src={bcount} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Flex>
          </Flex>
        </PageSection>
        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          hasCurvedDivider={false}
          index={2}
          className="p-0"
        >
          <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="flex-start"
            className="play-graph-section  row-reverse-md"
          >
            <Flex flex="2" width="100%" flexDirection="column" alignItems="left" justifyContent="flex-start">
              <div className="left-play-content">
                <Heading mb="15px" scale="xl" className="pred-finish-title text-left">
                  {t('Prize Funds')}
                </Heading>
                <Text className="txt-lrem text-left" mb="25px">
                  <p className="light-txt">{t('The prizes for each lottery round come from three sources:')}</p>
                </Text>
                <Box mb="24px">
                  <></>
                </Box>
                <ul className="howPlay-play">
                  <li>
                    <h2>Ticket Purchases</h2>
                    <p>100% of the CAKE paid by people buying tickets that round goes back into the prize pools.</p>
                  </li>
                  <li>
                    <h2>Rollover Prizes</h2>
                    <p>
                      After every round, if nobody wins in one of the prize brackets, the unclaimed CAKE for that
                      bracket rolls over into the next round and are redistributed among the prize pools.
                    </p>
                  </li>
                  <li>
                    <h2>CAKE Injections</h2>
                    <p>
                      {' '}
                      An average total of 35,000 CAKE from the treasury is added to lottery rounds over the course of a
                      week. This CAKE is of course also included in rollovers! Read more in our guide to{' '}
                      <a href="/">CAKE Tokenomics</a>
                    </p>
                  </li>
                </ul>
              </div>
            </Flex>
            <Flex flex="1.3" width="100%" flexDirection="column" alignItems="left" justifyContent="flex-start">
              <div className="body-graph-card">
                <img src={graph} className="img-fluid" alt="graph" />
                <div className="body-graph">
                  <div className="top-body-graph">
                    <h4 className="play-g-title">DIGITS MATCHED</h4>
                    <h4 className="play-g-title right-txt">PRIZE POOL ALLOCATION</h4>
                  </div>
                  <ul className="list-top-body-graph">
                    <li className="color1">
                      <p>Matches first 1</p>
                      <span>2%</span>
                    </li>
                    <li className="color2">
                      <p>Matches first 2</p>
                      <span>24%</span>
                    </li>
                    <li className="color3">
                      <p>Matches first 3</p>
                      <span>2%</span>
                    </li>
                    <li className="color4">
                      <p>Matches first 4</p>
                      <span>24%</span>
                    </li>
                    <li className="color5">
                      <p>Matches first 5</p>
                      <span>25%</span>
                    </li>
                    <li className="color6">
                      <p>Matches first 6</p>
                      <span>43%</span>
                    </li>
                    <li className="color7">
                      <p>Burn Pool</p>
                      <span>30%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Flex>
          </Flex>
        </PageSection>

        <PageSection
          innerProps={{ style: { margin: '0', width: '100%' } }}
          hasCurvedDivider={false}
          index={2}
          className="play-information question-section"
        >
          <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="flex-start"
            className="play-txt-list p-0"
          >
            <Flex
              flex="1"
              width="100%"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              className="tombol-img"
            >
              <img src={tombola1} className="img-fluid" alt="tombola" />
            </Flex>
            <Flex flex="1" width="100%" flexDirection="column" alignItems="left" justifyContent="flex-start" ml="50px">
              <Heading mb="15px" scale="xl" className="pred-finish-title text-left">
                {t('Still got questions?')}
              </Heading>
              <ul className="howPlay-play play-txt-content">
                <li>
                  <p>
                    Check our in-depth guide on <a href="/">how to play the PancakeSwap lottery!</a>
                  </p>
                </li>
              </ul>
            </Flex>
          </Flex>
        </PageSection>
      </section>
    </>
  )
}
