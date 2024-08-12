import React from 'react'

import { createRoot } from 'react-dom/client'

import { createServer, Model } from 'miragejs'

import { App } from './App.tsx'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de Website',
          type: 'deposit',
          value: 5000,
          category: 'Tecnologia',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          value: 2500,
          category: 'Despesas',
          createdAt: new Date(),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => this.schema.all('transaction'))

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
