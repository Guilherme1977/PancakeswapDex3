import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button onClick={onPresentConnectModal} {...props} style={{backgroundColor:"#5922C8", boxShadow:"0px -2px 0px 0px #15cda8 inset"}}>
      {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton
