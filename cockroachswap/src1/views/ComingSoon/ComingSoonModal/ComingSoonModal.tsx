import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Modal,
  Flex,
  Button,
} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'

import useTheme from 'hooks/useTheme'


const StyledModal = styled(Modal)`
  min-width: 280px;
  max-width: 320px;
`

interface ComingSoonModalProps {
  onDismiss?: () => void
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ onDismiss }) => {
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <StyledModal title={t('')} onDismiss={onDismiss} headerBackground={theme.colors.gradients.cardHeader}>
      <Flex alignItems="center" justifyContent="center" mb="16px">
        <Flex alignItems="center" minWidth="70px">
          <img style={{width:100}} alt="Coming Soon" src="./images/download.png" />
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="center">
          <Button onClick={onDismiss} style={{width:'100%', maxWidth:"300px", backgroundColor:"#00cfa9"}}>
            {t('Coming Soon')}
          </Button>

      </Flex>
    </StyledModal>
  )
}

export default ComingSoonModal
