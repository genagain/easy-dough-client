import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTable from '../TransactionsTable'

describe('The TransactionsTable component', () => {

  describe('renders', () => {
    beforeEach(() => {
      const transactions = [
            { 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': 70.00 },
            { 'date': '2020-07-04', 'description': 'Wine', 'amount': 15.00 }
          ]
      render(<TransactionsTable transactions={transactions} />)
    })

    test('each transaction', () => {
      const expectedTransactions = [
        { 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': 70.00 },
        { 'date': '2020-07-04', 'description': 'Wine', 'amount': 15.00 },
      ]

      expectedTransactions.forEach(transaction => {
        const date = screen.getByText(transaction.date)
        expect(date).not.toBeNull()

        const description = screen.getByText(transaction.description)
        expect(description).not.toBeNull()

        const amount = screen.getByText(`${transaction.amount}`)
        expect(amount).not.toBeNull()
      })
    })
  })
})
