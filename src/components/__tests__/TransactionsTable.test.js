import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTable from '../TransactionsTable'

describe('When there are no transactions to render, the TransactionsTable component', () => {
  test('renders a message that says there are no transactions', () => {
    render(<TransactionsTable allTransactions={[]} />)
    const message = screen.getByText("Looks like we don't have any transactions to show yet")
    expect(message).not.toBeNull()
  })
})

describe('When there are transactions to render, the TransactionsTable component', () => {

  describe('renders', () => {
    beforeEach(() => {
      const allTransactions = [
        { 
          'month': 'July',
          'transactions': [
            { 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': 70.00 },
            { 'date': '2020-07-04', 'description': 'Wine', 'amount': 15.00 }
          ]
        },
        { 'month': 'June',
          'transactions': [
            { 'date': '2020-06-21', 'description': 'Pizza Delivery', 'amount': 20.00 },
            { 'date': '2020-06-13', 'description': 'Beer', 'amount': 10.00 }
          ]
        }
      ]
      render(<TransactionsTable allTransactions={allTransactions} />)
    })

    // TODO test this rendering each cell in TransactionRow component
/*    test('each transaction', () => {*/
      //const expectedTransactions = [
        //{ 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': 70.00 },
        //{ 'date': '2020-07-04', 'description': 'Wine', 'amount': 15.00 },
        //{ 'date': '2020-06-21', 'description': 'Pizza Delivery', 'amount': 20.00 },
        //{ 'date': '2020-06-13', 'description': 'Beer', 'amount': 10.00 }
      //]

      //expectedTransactions.forEach(transaction => {
        //const date = screen.getByText(transaction.date)
        //expect(date).not.toBeNull()

        //const description = screen.getByText(transaction.description)
        //expect(description).not.toBeNull()

        //const amount = screen.getByText(`${transaction.amount}`)
        //expect(amount).not.toBeNull()
      //})
    //})

    test('each transaction by month in reverse chronological order', () => {
        const months = screen.getAllByRole('heading', { name: /(june)|(july)/i })
        expect(months).toHaveLength(2)
        expect(months[0]).toHaveTextContent('July')
        expect(months[1]).toHaveTextContent('June')
    })
  })
})
