import React from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import { Flex , Button, useWalletModal } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useAuth from 'hooks/useAuth'
import coinstar from '../images/coinWstar.png'




export default function HowBuy(){
  const { t } = useTranslation()
  
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)
    return(
        <>
        <section className="buy-section">
        <Flex
            position="relative"
            flexDirection={['column-reverse', null, null, 'row']}
            alignItems={['flex-end', null, null, 'center']}
            justifyContent="center"
        >
            <Flex flex="4" flexDirection="column" className="buy-servicelist-col" >
                <h1 className="title mb-25">how <span> to buy ?</span></h1>
                <ul className="list-of-buy ">
                    <li>
                        <div className="manage-media">
                            <div className="mang-circle">1</div>
                            <div className="media-body">
                                <h4 className="m-title">{t('Install Metamask extension')} </h4>
                                {/* <p>{t('on or chrome or download Metamask. https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047')}</p> */}
                                <p className="mb-59-desktop"><Link to={{ pathname: "https://www.youtube.com/watch?v=Af_lQ1zUnoM" }}  target="_blank"> Click <b>here</b> for guide</Link>  </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="manage-media">
                            <div className="mang-circle">2</div>
                            <div className="media-body">
                                <h4 className="m-title">{t(' Send BNB to your wallet')}</h4>
                                <p><></></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="manage-media">
                            <div className="mang-circle">3</div>
                            <div className="media-body">
                                <h4 className="m-title">{t('Connect your wallet to our SWAP ')}</h4>
                                <p><></></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="manage-media" >
                            <div className="mang-circle">4</div>
                            <div className="media-body">
                                <h4 className="m-title">{t(' Swap your BNB for ICC and have fun !')}</h4>
                                <p><></></p>
                            </div>
                        </div>
                    </li>                
                </ul>
                <img src={coinstar} className="moving-block img-fluid d-block ml-auto d-block d-md-none" alt="coin with star" />
                <div className="btn-wrapper">
                    <Link to="/swap" className="mr-10">
                        <Button className="btn btn-theme"> {t('Buy ICC')}</Button>
                    </Link>
                    {!account && <Button onClick={onPresentConnectModal} className="btn btn-theme-outline" >
                        {t('Connect Wallet')}
                        </Button>
                        }
                    {/* <Link to="/">
                        <Button className="btn btn-theme-outline" > {t('Connect wallet')}</Button>
                    </Link> */}
                </div>
            </Flex>
            <Flex flex="1"  className="space-left-coin text-right d-none d-md-block moving-block fadeUpToBottom">
                <img src={coinstar} className="img-fluid d-block ml-auto fadeUpToBottom" alt="coin with star" />
            </Flex>
        </Flex>
            {/* <div className="container">
                
            </div> */}
        </section>
        </>
    )
}