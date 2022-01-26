import React, { useEffect, useState } from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import { Flex, Button, useWalletModal } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import Markicon from '../images/check.png'
import Progressicon from '../images/progress.png'
import arrDownc1 from '../images/arrow-down-c1.svg'
import roadmapcoin from '../images/roadmap-icon.png'
import tombola1 from '../images/tombola1.png'
import t007 from '../images/#00071.png'
import star from '../images/star.png'


export default function Roadmap() {
    const { t } = useTranslation()
    const { account } = useWeb3React()
    const { login, logout } = useAuth()
    const { onPresentConnectModal } = useWalletModal(login, logout, t)

    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingQ122, setIsLoadingQ122] = useState(false)
    const [isLoadingQ222, setIsLoadingQ222] = useState(false)
    const [isLoadingQ322, setIsLoadingQ322] = useState(false)

    // const buttonHandler = () => {isLoadingQ122
    //     setIsLoading(current => !current)
    // }
    const buttonHandler = () => {
        setIsLoading(current => !current)
    }
    const buttonHandlerQ122 = () => {
        setIsLoadingQ122(current => !current)
    }
    const buttonHandlerQ222 = () => {
        setIsLoadingQ222(current => !current)
    }
    const buttonHandlerQ322 = () => {
        setIsLoadingQ322(current => !current)
    }

    // useEffect(() => {
    //     console.log(isLoading);
    // }, [isLoading]);
    // useEffect(() => {
    //     console.log(isLoadingQ122);
    // }, [isLoadingQ122]);
    // useEffect(() => {
    //     console.log(isLoadingQ222);
    // }, [isLoadingQ222]);
    // useEffect(() => {
    //     console.log(isLoadingQ322);
    // }, [isLoadingQ322]);

    return (
        <>
            <section className="buy-section">
                {/* <button onClick={buttonHandler} type="button">
                    Change
                </button> */}

                {/* {isLoading ? "Loading..." : null} */}

                <Flex
                    position="relative"
                    flexDirection={['column-reverse', null, null, 'row']}
                    alignItems={['flex-end', null, null, 'center']}
                    justifyContent="center"
                >
                    <Flex flex="1" flexDirection="column">
                        <div className="text-center">
                            <h1 className="title mb-10" >Road<span>map</span></h1>
                        </div>
                    </Flex>
                </Flex>
                <Flex
                    position="relative"
                    flexDirection={['column-reverse', null, null, 'row']}
                    alignItems={['flex-end', null, null, 'center']}
                    justifyContent="center"
                    className="mb-30 mb-0"
                >
                    <Flex flex="1" flexDirection="column" className="mr-30 mxw-100">
                        <div className="launch-card">
                            <h2 className="road-title">Q4 2021 LAUNCH</h2>
                            <ul className="list-roadmap withimg">
                                <li> 
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p>Q4 2021 Launch</p>
                                </li>
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p>Launch of the icc website</p>
                                </li>
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p className="mt-5">White paper</p>
                                </li>
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p className="mt-5">100 Holders</p>
                                </li>
                                {
                                    isLoading
                                        ?
                                        <>
                                            <li>
                                                <img src={Markicon} className="img-fluid" alt="Markicon" />
                                                <p className="mt-5">Coingecko application</p>
                                            </li>
                                            <li>
                                                <img src={Markicon} className="img-fluid" alt="Markicon" />
                                                <p className="mt-5">Coin market cap application</p>
                                            </li>
                                            <li>
                                                <img src={Markicon} className="img-fluid" alt="Markicon" />
                                                <p className="mt-5">Set up social media accounts</p>
                                            </li>
                                            <li>
                                                <img src={Markicon} className="img-fluid" alt="Markicon" />
                                                <p className="mt-5">Poo coin / Dextools listing</p>
                                            </li>
                                            <li>
                                                <img src={Markicon} className="img-fluid" alt="Markicon" />
                                                <p className="mt-5">Pancakeswap listing</p>
                                            </li>
                                        </>
                                        :
                                        null
                                }
                            </ul>

                            {
                                isLoading
                                    ?
                                    <>
                                        <Button onClick={buttonHandler} className="load-more-home-btn" >Less <img src={arrDownc1} className="img-fluid rotate-180" alt="" /></Button>
                                    </>
                                    :
                                    <Button onClick={buttonHandler} className="load-more-home-btn" >More <img src={arrDownc1} className="img-fluid" alt="" /></Button>
                            }


                        </div>
                    </Flex>
                    <Flex flex="1" flexDirection="column" className="mxw-100">
                        <div className="fadeUpToBottom">
                            <img src={roadmapcoin} className="img-fluid m-30 " alt="" />
                        </div>
                    </Flex>
                </Flex>
                <Flex
                    position="relative"
                    flexDirection={['column-reverse', null, null, 'row']}
                    alignItems={['flex-end', null, null, 'center']}
                    justifyContent="center"
                    className="mb-30 row-reverse-md"
                >
                    <Flex flex="1" flexDirection="column" className="mr-30 mxw-100">
                        <div className="fadeUpToBottom">
                            <img src={tombola1} className="img-fluid md-flip" alt="" />
                        </div>
                    </Flex>
                    <Flex flex="1" flexDirection="column" className="mxw-100">
                        <div className="launch-card">
                            <h2 className="road-title">Q1 2022</h2>
                            <ul className="list-roadmap">
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p className="mt-5 pl-60">1000 Holders</p>
                                </li>
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p className="mt-5 pl-60">Listing Coingecko & Coin market cap</p>
                                </li>
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p className="mt-5 pl-60">Farms</p>
                                </li>
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p className="mt-5 pl-60">Pools</p>
                                </li>
                                <li>
                                    <img src={Markicon} className="img-fluid" alt="Markicon" />
                                    <p className="mt-5 pl-60">Cockroach Swap & Exchange</p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5">NFT & Marketplace release </p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5">Cockroach Punks NFT Collection</p>
                                </li>
                                {
                                    isLoadingQ122
                                        ?
                                        <>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Cockroach Cards NFT Collection</p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Predictions Lottery ICC</p>
                                            </li>
                                            
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Accept credit cards</p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">HODL to win unique NFTs</p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Crypto community influencers marketing</p>
                                            </li>
                                        </>
                                        :
                                        null
                                }

                            </ul>
                            {
                                isLoadingQ122
                                    ?
                                    <>
                                        <Button onClick={buttonHandlerQ122} className="load-more-home-btn" >Less <img src={arrDownc1} className="img-fluid rotate-180" alt="" /></Button>
                                    </>
                                    :
                                    <Button onClick={buttonHandlerQ122} className="load-more-home-btn" >More <img src={arrDownc1} className="img-fluid" alt="" /></Button>
                            }
                        </div>
                    </Flex>
                </Flex>
                <Flex
                    position="relative"
                    flexDirection={['column-reverse', null, null, 'row']}
                    alignItems={['flex-end', null, null, 'center']}
                    justifyContent="center"
                    className="mb-30"
                >
                    <Flex flex="1" flexDirection="column" className="mr-30 mxw-100">
                        <div className="launch-card">
                            <h2 className="road-title">Q2 2022</h2>
                            <ul className="list-roadmap">
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5">10000 Holders</p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5">Play2Earn ICC Game & Metaverse</p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5">Cockroach Graphs & Tools</p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5">Cockroach News</p>
                                </li>
                                {
                                    isLoadingQ222
                                        ?
                                        <>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Metaverse Mini games </p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Bloomberg , Forbes Mentions</p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">High profile influencers marketing</p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">NFT Collections with community Collobration</p>
                                            </li>
                                        </>
                                        :
                                        null
                                }

                            </ul>

                            {
                                isLoadingQ222
                                    ?
                                    <>
                                        <Button onClick={buttonHandlerQ222} className="load-more-home-btn" >Less <img src={arrDownc1} className="img-fluid rotate-180" alt="" /></Button>
                                    </>
                                    :
                                    <Button onClick={buttonHandlerQ222} className="load-more-home-btn" >More <img src={arrDownc1} className="img-fluid" alt="" /></Button>
                            }

                        </div>
                    </Flex>
                    <Flex flex="1" flexDirection="column" alignItems="center" className="mxw-100"> 
                        <div className="fadeUpToBottomslow">
                            <img src={t007} className="img-fluid mx-350" alt="" />
                        </div>
                    </Flex>
                </Flex>
                <Flex
                    position="relative"
                    flexDirection={['column-reverse', null, null, 'row']}
                    alignItems={['flex-end', null, null, 'center']}
                    justifyContent="center"
                    className="mb-30 row-reverse-md"
                >

                    <Flex flex="1" flexDirection="column" className="mr-30 mxw-100" alignItems="center" >
                        <div className="fadeUpToBottomslow">
                            <img src={star} className="img-fluid mx-350" alt="" />
                        </div>
                    </Flex>
                    <Flex flex="1" flexDirection="column" className="mxw-100">
                        <div className="launch-card">
                            <h2 className="road-title">Q3 2022</h2>
                            <ul className="list-roadmap">
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5"> 50000 Holders</p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5">Open cockroach Metaverse to external developers to extend functionalities </p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5"> More high profile media coverage</p>
                                </li>
                                <li>
                                    <span className="moving-icon-home">
                                        <i className="fa fa-spinner fa-spin "> </i>
                                    </span>
                                    <p className="mt-5"> Cockroachbrawl Game mode</p>
                                </li>
                                {
                                    isLoadingQ322
                                        ?
                                        <>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Very high profile influencers marketing </p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5"> List on bigger exchanges </p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5"> Cockroach wallet</p>
                                            </li>
                                            <li>
                                                <span className="moving-icon-home">
                                                    <i className="fa fa-spinner fa-spin "> </i>
                                                </span>
                                                <p className="mt-5">Cockroach mobile application </p>
                                            </li>
                                        </>
                                        :
                                        null
                                }

                            </ul>
                            {
                                isLoadingQ322
                                    ?
                                    <>
                                        <Button onClick={buttonHandlerQ322} className="load-more-home-btn" >Less <img src={arrDownc1} className="img-fluid rotate-180" alt="" /></Button>
                                    </>
                                    :
                                    <Button onClick={buttonHandlerQ322} className="load-more-home-btn" >More <img src={arrDownc1} className="img-fluid" alt="" /></Button>
                            }
                        </div>
                    </Flex>
                </Flex>
                <Flex
                    position="relative"
                    flexDirection={['column-reverse', null, null, 'row']}
                    alignItems={['flex-end', null, null, 'center']}
                    justifyContent="center"
                    className="mb-30"
                >
                    <div className="btn-wrapper text-center">
                        <Link to="/swap" className="mr-10">
                            <Button className="btn btn-theme"> {t('Buy ICC')}</Button>
                        </Link>
                        {!account && <Button onClick={onPresentConnectModal} className="btn btn-theme-outline" >
                        {t('Connect Wallet')}
                        </Button>
                        }
                        {/* <Link to="/" className="mr-10">
                            <Button className="btn btn-theme-outline"> {t('Connect wallet')}</Button>
                        </Link> */}
                    </div>
                </Flex>
            </section>
        </>
    )
}