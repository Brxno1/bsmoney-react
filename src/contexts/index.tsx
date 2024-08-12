import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'

type TransactionState = {
  id: number
  title: string
  type: string
  category: string
  value: number
  createdAt: number
}

type TransactionInputData = Omit<TransactionState, 'id' | 'createdAt'>

type TransactionsProviderProps = {
  children: ReactNode
}

type TransactionsCreateContext = {
  transactions: TransactionState[]
  createTransaction: (transactionData: TransactionInputData) => Promise<void>
  loading: boolean
}

export const TransactionContext = createContext<TransactionsCreateContext>(
  {} as TransactionsCreateContext,
)

export function TransactionContextProvider({
  children,
}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionState[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await api
        .get('/transactions')
        .then((response) => setTransactions(response.data.transactions))
    }

    fetchData()
  }, [])

  const createTransaction = async (transactionData: TransactionInputData) => {
    setLoading(true)
    const response = await api.post('/transactions', {
      ...transactionData,
      createdAt: new Date(),
    })
    const { transaction } = await response.data

    setTransactions([...transactions, transaction])
    setLoading(false)
  }

  return (
    <TransactionContext.Provider
      value={{ transactions, createTransaction, loading }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
