import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlan from '../SpendingPlan'

describe('When there is only one part to render, the SpendingPlan', () => {
  describe('renders', () => {
    beforeEach(() => {
      const spendingPlan = {
          discretionarySpending: {
            label: 'Spending Money',
            searchTerm: '*',
            expectedAmount: 0
          }
        }
      render(<SpendingPlan spendingPlan={spendingPlan} />)
    })

    test('the fixed costs header', () => {
      const header = screen.getByRole('heading', { name: /fixed costs/i})
      expect(header).not.toBeNull()
    })

    test('the message about not accounting for your fixed costs', () => {
      const message = screen.getByText(/looks like you haven't accounted for your fixed costs\. be sure to add them as parts of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the savings header', () => {
      const header = screen.getByRole('heading', { name: /savings/i})
      expect(header).not.toBeNull()
    })

    test('the message about not saving', () => {
      const message = screen.getByText(/looks like you aren't planning to save any money\. be sure to add savings as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the investments header', () => {
      const header = screen.getByRole('heading', { name: /investments/i})
      expect(header).not.toBeNull()
    })

    test('the message about not investing', () => {
      const message = screen.getByText(/looks like you aren't planning to invest any money\. be sure to add investments as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the discretionary spending header', () => {
      const header = screen.getByRole('heading', { name: /discretionary spending/i})
      expect(header).not.toBeNull()
    })

    test('the spending plan parts table headers', () => {
      const expectedColumnHeaders = [
        'LABEL',
        'SEARCH TERM',
        'EXPECTED MONTHLY AMOUNT'
      ]

      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeaderText = screen.getByText(columnHeader)
        expect(columnHeaderText).not.toBeNull()
      })
    })

    test('the spending money label', () => {
      const label = screen.getByText(/spending money/i)
      expect(label).not.toBeNull()
    })

    test('the * search term', () => {
      const searchTerm = screen.getByText(/\*/i)
      expect(searchTerm).not.toBeNull()
    })

    test('the $0 expected amount', () => {
      const expectedAmount = screen.getByText(/\$0/i)
      expect(expectedAmount).not.toBeNull()
    })
  })
})
