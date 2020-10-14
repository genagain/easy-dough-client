import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTable from '../TransactionsTable'

describe('The TransactionsTable component', () => {

  describe('renders', () => {
    beforeEach(() => {
      const transactions = [
            { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' },
            { 'id': 2, 'date': '2020-07-04', 'description': 'Wine', 'amount': '15.00' }
          ]
      render(<TransactionsTable transactions={transactions} />)
    })

    test('each transaction', () => {
      const expectedTransactions = [
        { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' },
        { 'id': 2, 'date': '2020-07-04', 'description': 'Wine', 'amount': '15.00' },
      ]

      expectedTransactions.forEach(transaction => {
        const date = screen.getByText(transaction.date)
        expect(date).not.toBeNull()

        const description = screen.getByText(transaction.description)
        expect(description).not.toBeNull()

        const amount = screen.getByText(`${transaction.amount}`)
        expect(amount).not.toBeNull()

        const deleteButton= screen.getByTestId(`delete-${transaction.id}`)
        expect(deleteButton).not.toBeNull()
      })
    })
  })
})
