import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { Flex, Button, useWalletModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import TokenomicsImg from '../images/Tokenomics.png'

export default function Tockenmics() {
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
                Tok<span>enomics</span>
              </h1>
            </div>
            <div className="text-center">
              <img src={TokenomicsImg} className="img-fluid mb-30 mobile-tokenomic-img" alt="" />
              <div>
                <div className="btn-wrapper text-center mobile-tokenomic-btn" >
                  <Link to="/swap" className="mr-10">
                    <Button className="btn btn-theme"> {t('Buy ICC ')}</Button>
                  </Link>
                  {!account && <Button onClick={onPresentConnectModal} className="btn btn-theme-outline" >
                        {t('Connect Wallet')}
                        </Button>
                        }
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
