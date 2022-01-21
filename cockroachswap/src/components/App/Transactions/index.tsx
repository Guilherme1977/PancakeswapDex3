import React from 'react'
import { HistoryIcon, Button, useModal } from '@pancakeswap/uikit'
import TransactionsModal from './TransactionsModal'
// import RecentTransactionIcon from 'images/RecentTransactionIcon.svg'

const Transactions = () => {
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  return (
    <>
      <Button variant="text" p={0} onClick={onPresentTransactionsModal} ml="16px">
        {/* <HistoryIcon color="textSubtle" width="24px" /> */}
        <img src="/images/RecentTransactionIcon.svg" alt="reset" />
      </Button>
    </>
  )
}

export default Transactions
