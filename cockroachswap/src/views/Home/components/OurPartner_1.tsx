import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Flex, Button, useWalletModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import TokenomicsImg from '../images/Tokenomics.png'

export default function OurPartner() {
  const { t } = useTranslation()

  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <>
      <section className="buy-section">
        <Flex
          position="relative"
          flexDirection={['column-reverse', null, null, 'row']}
          alignItems={['flex-end', null, null, 'center']}
          justifyContent="center"
        >
          <Flex flex="1" flexDirection="column">
            <div className="text-center">
              <h1 className="title text-uppercase">
                Our <span>Partner</span>
              </h1>
            </div>
            <div className="text-center">
              {/* <img src={TokenomicsImg} className="img-fluid mb-30 mobile-tokenomic-img" alt="" /> */}
              <div>
                <div className="btn-wrapper text-center mobile-tokenomic-btn" >
                    <Flex flexDirection="row" justifyContent="space-evenly">
                        <Link to="/swap" className="mr-10">
                            <Flex alignItems="center">
                                <img src="/logo_transparent.png" alt="pancakeswap" style={{width:'30px', marginRight:"8px"}} className="mr-8"/>
                                <p>PancakeSwap</p>
                            </Flex>
                        </Link>
                        <Link to="/swap" className="mr-10">
                            <Flex alignItems="center">
                                <img src="/logo_transparent.png" alt="pancakeswap" style={{width:'30px', marginRight:"8px"}} className="mr-8"/>
                                <p>Dex Tools</p>
                            </Flex>
                        </Link>
                        <Link to="/swap" className="mr-10">
                            <Flex alignItems="center">
                                <img src="/logo_transparent.png" alt="pancakeswap" style={{width:'30px', marginRight:"8px"}} className="mr-8"/>
                                <p>CoinGecko</p>
                            </Flex>
                        </Link>
                        <Link to="/swap" className="mr-10">
                            <Flex alignItems="center">
                                <img src="/logo_transparent.png" alt="pancakeswap" style={{width:'30px', marginRight:"8px"}} className="mr-8"/>
                                <p>CoinMarketCap</p>
                            </Flex>
                        </Link>
                    </Flex>
                  
                  {/* <Link to="/" className="mr-10">
                    <Button className="btn btn-theme-outline"> {t('Connect wallet')}</Button>
                  </Link> */}
                </div>
              </div>
            </div>
          </Flex>
        </Flex>

        {/* <div className="container">
                
            </div> */}
      </section>
    </>
  )
}
