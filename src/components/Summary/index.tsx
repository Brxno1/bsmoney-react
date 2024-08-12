import depositIcon from '../../assets/deposit.svg'
import withdrawIcon from '../../assets/withdraw.svg'
import walletIcon from '../../assets/wallet.svg'

import { Container } from './styles'

import { useContextTransactions } from '../../contexts/context'

export function Summary() {
  const { transactions } = useContextTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.value
        acc.total += transaction.value
      } else {
        acc.withdraws += transaction.value
        acc.total -= transaction.value
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={depositIcon} alt="" width={35} />
        </header>
        <strong>
          +
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={withdrawIcon} alt="" width={35} />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={walletIcon} alt="" width={35} />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}
