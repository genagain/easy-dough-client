import React from 'react';
import { render, screen } from '@testing-library/react'
import TransactionsTableList from '../TransactionsTableList'
import UserContext from '../../UserContext'

describe('When there are no transactions to render, the TransactionsTableList component', () => {
  test('renders a message that says there are no transactions', () => {
    render(<UserContext.Provider value={{}}><TransactionsTableList allTransactions={[]} /></UserContext.Provider>)
    const message = screen.getByText("No transactions were found that matched the provided date range or search term")
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
            { 'id': 1, 'date': '2020-07-10', 'description': 'Grocery Store', 'amount': 70.00 },
            { 'id': 2, 'date': '2020-07-04', 'description': 'Wine', 'amount': 15.00 }
          ]
        },
        { 'month': 'June',
          'transactions': [
            { 'id': 3, 'date': '2020-06-21', 'description': 'Pizza Delivery', 'amount': 20.00 },
            { 'id': 4,'date': '2020-06-13', 'description': 'Beer', 'amount': 10.00 }
          ]
        }
      ]
      render(<UserContext.Provider value={{}}><TransactionsTableList allTransactions={allTransactions} /></UserContext.Provider>)
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
  })
})
