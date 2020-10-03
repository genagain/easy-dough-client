import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTableList from '../TransactionsTableList'

describe('When there are no transactions to render, the TransactionsTableList component', () => {
  test('renders a message that says there are no transactions', () => {
    render(<TransactionsTableList allTransactions={[]} />)
    const message = screen.getByText("Looks like we don't have any transactions to show yet")
    expect(message).not.toBeNull()
  })
})

describe('When there are transactions to render, the TransactionsTableList component', () => {

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
      render(<TransactionsTableList allTransactions={allTransactions} />)
    })

    test('each headers for month in reverse chronological order', () => {
        const months = screen.getAllByRole('heading', { name: /(june)|(july)/i })
        expect(months).toHaveLength(2)
        expect(months[0]).toHaveTextContent('July')
        expect(months[1]).toHaveTextContent('June')
    })

    test("each month's transactions are rendered under reach month", () => {
      const expectedAllTransactions = [
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
      
      expectedAllTransactions.forEach(monthsTransactions => {
        const { month, transactions } = monthsTransactions
        const monthList = screen.getByRole('list', { name: month })
        expect(monthList.children[0]).toHaveTextContent(month)

        transactions.forEach( transaction => {
          const { date, description, amount } = transaction
          expect(monthList.children[1]).toHaveTextContent(date)
          expect(monthList.children[1]).toHaveTextContent(description)
          expect(monthList.children[1]).toHaveTextContent(amount)
        })
      })
    })

        // TODO expect that each month renders the children under it
  })
})