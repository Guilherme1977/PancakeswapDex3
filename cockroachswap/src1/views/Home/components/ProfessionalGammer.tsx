import React, { useState } from 'react'
import './style.css';
import { Link } from 'react-router-dom'
import { Flex, Button, useModal, Modal, Box, Spinner } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ComingSoonModal from 'views/ComingSoon/ComingSoonModal/ComingSoonModal'
import arrowright from '../images/right-angle.png'
import holNFT from '../images/hol-nft.png'
import NewModal from './Newmodal'


export default function ProfessionalGame() {
    const [modalIsOpen, setModalIsOpen] = useState(true)

    // // const [onPresent1] = useModal(<VideoModal block={state.snapshot} />);

    const [onPresent1] = useModal(<NewModal block={0} />);
    const [useModalCustom] = useModal(<ComingSoonModal />)

    const { t } = useTranslation()

    return (
        <>
            <Flex
                position="relative"
                flexDirection={['column-reverse', null, null, 'row']}
                alignItems={['flex-end', null, null, 'center']}
                justifyContent="center "
            >
                <Flex flex="1" flexDirection="column">
                    <div className="text-left">
                        <h1 className="title game-title-space" >Be a professional Gamer <span>- Play2Earn </span></h1>
                    </div>
                </Flex>
                <Flex flex="1" flexDirection="column">
                    <>
                    </>
                </Flex>
            </Flex>

            <Flex
                position="relative"
                flexDirection={['column-reverse', null, null, 'row']}
                alignItems={['flex-end', null, null, 'center']}
                justifyContent="center"
                className="row-reverse-md prof-game-col"
            >
                <Flex flex="1" flexDirection="column" className="mr-70 play-video-col">
                    <video className="vjs-default-skin" controls preload="auto" poster="images/videoImg.png" width="100%" >
                        <source src="images/Gameteaserv2.mp4" type="video/mp4" />
                        <source src="images/Gameteaserv2.webm" type="video/webm" />
                    </video>
                </Flex>
                <Flex flex="1" flexDirection="column">
                    <>
                        <div className="profes-txt">
                            <p>Be a professional Gamer – Convert your cards to crypto! Did you see streamers at twitch earn hundreds of dollars for playing games? Now it’s your turn</p>
                            <ul className="profes-list">
                                <li>
                                    <img src={arrowright} className="img-fluid" alt="" />
                                    <p>The Intergalactic Cockroach game makes it easy to earn tokens on a daily basis.</p>
                                </li>
                                <li>
                                    <img src={arrowright} className="img-fluid" alt="" />
                                    <p>Players can win rewards and exchange items for crypto on third-party marketplaces like BSC opensea.</p>
                                </li>
                            </ul>
                            <div className="md-t-center">
                                <Link to="/swap" className="mr-10">
                                    <Button className="btn btn-theme"> {t('Buy ICC Now')}</Button>
                                </Link>
                                {/* <Link to="/" className="mr-10"> */}
                                    <Button className="btn btn-theme-outline" onClick={useModalCustom}> {t('Coming Soon')}</Button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </>
                </Flex>
            </Flex>
            <Flex
                position="relative"
                flexDirection={['column-reverse', null, null, 'row']}
                alignItems={['flex-end', null, null, 'center']}
                justifyContent="center"
                className="earn-hld row-reverse-md"
            >

                <Flex flex="1" flexDirection="column" className="mr-70">
                    <>
                        <div className="profes-txt">
                            <h1 className="title mb-30" >HODL <span>and Win NFT !</span></h1>
                            <p className="mb-30">By holding large amount of $ICC hodlers will win NFT that also can be used in game & trades.</p>
                            <img src={holNFT} className="img-fluid d-block d-md-none moving-block" alt="video" />
                            <div className="space-top-md">
                                <Link to="/swap" className="mr-10">
                                    <Button className="btn btn-theme"> {t('Buy ICC Now')}</Button>
                                </Link>
                                {/* <Link to="/" className="mr-10"> */}
                                    <Button className="btn btn-theme-outline" onClick={useModalCustom}> {t('Coming Soon')}</Button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </>
                </Flex>
                <Flex flex="1" flexDirection="column" className="d-none d-md-block moving-block fadeUpToBottom">
                    <div className="" >
                        <img src={holNFT} className="img-fluid fadeUpToBottom" alt="video" />
                    </div>
                </Flex>
            </Flex>


        </>
    )
}