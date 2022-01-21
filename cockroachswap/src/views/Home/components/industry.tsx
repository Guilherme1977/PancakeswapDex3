import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'
// import styled from 'styled-components'
import { Flex, Button, useWalletModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useAuth from 'hooks/useAuth'
import IndImages from '../images/tradanything.png';



export default function IndustryStand(){
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

    return(
        <>
        <section className="industry-section">
        <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
        >
            <Flex flex="1" flexDirection="column" className=" mr-130  d-none d-md-block">
                <div className="fadeUpToBottom">
                    <img src={IndImages} className="img-fluid " alt=""/>
                </div>
            </Flex>
            <Flex
                flex={[null, null, null, '1']}
                position="relative"
                >
                
            <div className="indust-block btn-wrapper ">
                <h1 className="title" >Trade anything. <span> No registration, no hassle.</span></h1>
                <p> {t('Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.')}</p>
                <div className="md-show d-md-none moving-block fadeUpToBottom">
                    <img src={IndImages} className="img-fluid" alt=""/>
                </div>
                {/* <Link to="/" className="mr-10">
                    <Button className="btn btn-theme"> {t('Connect Wallet')}</Button>
                </Link> */}
                <div style={{display:'inline-block'}} className="mr-10">
                    {!account && <Button onClick={onPresentConnectModal} className="btn btn-theme" >
                        {t('Connect Wallet')}
                        </Button>
                    }
                </div>
                <Link to="/swap">
                    <Button className="btn btn-theme-outline" > {t('Trade Now')}</Button>
                </Link>
            </div>
            </Flex>
        </Flex>
        </section>
        </>
    )
}