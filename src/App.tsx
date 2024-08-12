import { useState } from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Modal from 'react-modal'

import { GlobalStyles } from './styles/GlobalStyles.ts'

// components
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard/index.tsx'
import { NewTransactionModal } from './components/NewTransactionModal/index.tsx'
import { TransactionContextProvider } from './contexts/index.tsx'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }
  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionContextProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestCloseFn={handleCloseNewTransactionModal}
      />

      <ToastContainer position="top-center" limit={1} theme="dark" />
      <GlobalStyles />
    </TransactionContextProvider>
  )
}
