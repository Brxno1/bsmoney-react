import { Container, ContainerLoading, TableTransaction } from './styles'

import loadingIcon from '../../assets/loading.svg'

import { useContextTransactions } from '../../contexts/context'

export const TransactionTable = () => {
  const { transactions, loading } = useContextTransactions()

  return (
    <>
      {transactions.length <= 0 || loading ? (
        <ContainerLoading>
          <img src={loadingIcon} alt="" />
        </ContainerLoading>
      ) : (
        <Container>
          <TableTransaction>
            <thead>
              <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions &&
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.title}</td>
                    <td className={transaction.type}>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(transaction.value)}
                    </td>
                    <td className="category">{transaction.category}</td>
                    <td className="data">
                      {new Intl.DateTimeFormat('pt-BR').format(
                        new Date(transaction.createdAt),
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </TableTransaction>
        </Container>
      )}
    </>
  )
}
