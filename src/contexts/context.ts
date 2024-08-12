import { useContext } from 'react'

import { TransactionContext } from './index'

export const useContextTransactions = () => {
  const context = useContext(TransactionContext)

  if (context === undefined) {
    throw new Error(
      'You use useContextTransactions inside <TransactionContextProvider />',
    )
  }

  return { ...context }
}
