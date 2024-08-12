import { FormEvent, useRef, useState } from 'react'

import Modal from 'react-modal'

import { toast } from 'react-toastify'

// Components
import { RadioBox, Container, TransactionTypeContainer } from './styles'

// ICONS
import closeModal from '../../assets/closeModal.svg'
import depositIcon from '../../assets/deposit.svg'
import withdrawIcon from '../../assets/withdraw.svg'

import { useContextTransactions } from '../../contexts/context'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestCloseFn: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestCloseFn,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  const titleRef = useRef<HTMLInputElement>(null)
  const valueRef = useRef<HTMLInputElement>(null)
  const categoryRef = useRef<HTMLInputElement>(null)

  const { createTransaction } = useContextTransactions()

  const clearState = () => {
    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')
  }

  const handleCreateNewTransaction = (ev: FormEvent) => {
    ev.preventDefault()

    titleRef.current?.focus()

    if (Number(title)) {
      toast.warn('Título não pode ser um número')
      setTitle('')
      return
    }
    if (title) {
      valueRef.current?.focus()
    }
    if (title && value) {
      categoryRef.current?.focus()
    }

    const transactionsData = {
      title,
      value,
      category,
      type,
    }

    if (
      transactionsData.title === '' ||
      transactionsData.value === 0 ||
      transactionsData.category === '' ||
      transactionsData.type === ''
    ) {
      toast.warning('Todos os campos devem ser preenchidos')
      return
    }

    createTransaction(transactionsData)

    toast.success(
      `Transação de ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRl',
      }).format(value)} realizada com sucesso!`,
    )

    onRequestCloseFn()
    clearState()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestCloseFn}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestCloseFn}
        className="react-modal-close"
      >
        <img src={closeModal} alt="Close modal" width={24} />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          ref={titleRef}
          placeholder="Título"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        <input
          type="number"
          ref={valueRef}
          placeholder="Valor"
          value={value}
          onChange={(ev) => setValue(Number(ev.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            $isactive={type === 'deposit'}
            $activecolor="green"
          >
            <img src={depositIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            $isactive={type === 'withdraw'}
            $activecolor="red"
          >
            <img src={withdrawIcon} alt="Retirada" />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          ref={categoryRef}
          placeholder="Categoria"
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
