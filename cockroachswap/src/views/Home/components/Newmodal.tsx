import React, { useState } from 'react'
import { Box, Flex, InjectedModalProps, Modal, Button, Spinner } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'

interface VoteDetailsModalProps extends InjectedModalProps {
  block: number
}

const VoteDetailsModal: React.FC<VoteDetailsModalProps> = ({block , onDismiss}) => {
  const { t } = useTranslation()
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const { theme } = useTheme()

  const handleDismiss = () => {
    setModalIsOpen(false)
    onDismiss()
  }

  return (
    <Modal title={t('')} onDismiss={handleDismiss} className="modal-video">
            <Box mb="24px">
                    <iframe src="../images/videoplayback.mp4" title="YouTube video player">lasan</iframe>              
            </Box>
        </Modal>
  )
}

export default VoteDetailsModal
