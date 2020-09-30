import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTable from '../TransactionsTable'

describe('When there are no transactions to render, the TransactionsTable component', () => {
  test('renders a message that says there are no transactions', () => {
    render(<TransactionsTable transactions={[]} />)
    const message = screen.getByText("Looks like we don't have any transactions to show yet")
    expect(message).not.toBeNull()
  })
})

describe('When there are transactions to render, the TransactionsTable component', () => {

  describe('render', () => {
    beforeEach(() => {
      const transactions = [
        { 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': 70.00 },
        { 'date': '2020-07-04', 'description': 'Wine', 'amount': 15.00 },
        { 'date': '2020-06-21', 'description': 'Pizza Delivery', 'amount': 20.00 },
        { 'date': '2020-06-13', 'description': 'Beer', 'amount': 10.00 },
      ]
      render(<TransactionsTable transactions={transactions} />)
    })

    test('each transaction', () => {
      const expectedTransaction = [
        { 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': 70.00 },
        { 'date': '2020-07-04', 'description': 'Wine', 'amount': 15.00 },
        { 'date': '2020-06-21', 'description': 'Pizza Delivery', 'amount': 20.00 },
        { 'date': '2020-06-13', 'description': 'Beer', 'amount': 10.00 }
      ]

      expectedTransaction.forEach(transaction => {
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
