import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTable from '../TransactionsTable'
import UserContext from '../../UserContext'

describe('The TransactionsTable component', () => {

  describe('renders', () => {
    beforeEach(() => {
      const transactions = [
            { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': '70.00' },
            { 'id': 2, 'date': '2020-07-04', 'description': 'Wine', 'amount': '15.00' }
          ]
      render(<UserContext.Provider value={{}}><TransactionsTable transactions={transactions} /></UserContext.Provider>)
    })

    // TODO test table headers
    test('each column header', () => {
      const expectedColumnHeaders = [
        'Date',
        'Description',
        'Amount'
      ]

      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeaderText = screen.getByText(columnHeader)
        expect(columnHeaderText).not.toBeNull()
      })
    })

    test('each transaction', () => {
      const expectedTransactions = [
        { 'id': 1, 'date': 'Jul 10, 2020', 'description': 'Grocery Store', 'amount': '70.00' },
        { 'id': 2, 'date': 'Jul 4, 2020', 'description': 'Wine', 'amount': '15.00' },
      ]

      expectedTransactions.forEach(transaction => {
        const { id, date, description, amount } = transaction
        const dateText = screen.getByText(date)
        expect(dateText).not.toBeNull()

        const descriptionText = screen.getByText(description)
        expect(description).not.toBeNull()

        const amountText = screen.getByText(`${amount}`)
        expect(amountText).not.toBeNull()

        const deleteButton= screen.getByTestId(`delete-${id}`)
        expect(deleteButton).not.toBeNull()
      })
    })
  })
})
