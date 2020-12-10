import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlan from '../SpendingPlan'

describe('When there is only one part to render, the SpendingPlan', () => {
  describe('renders', () => {
    beforeEach(() => {
      const spendingPlan = [
        {
          discretionarySpending: [
            {
              label: 'Spending Money',
              searchTerm: '*',
              expectedAmount: 0
            }
          ]
        }
      ]
      render(<SpendingPlan spendingPlan={spendingPlan} />)
    })

    test('a fixed costs header', () => {
      const header = screen.getByRole('heading', { name: /fixed costs/i})
      expect(header).not.toBeNull()
    })

    test('a message about not accounting for your fixed costs', () => {
      const message = screen.getByText(/looks like you haven't accounted for your fixed costs\. be sure to add them as parts of your spending plan/i)
      expect(message).not.toBeNull()
    })

    test('a savings header', () => {
      const header = screen.getByRole('heading', { name: /savings/i})
      expect(header).not.toBeNull()
    })

    test('a investments header', () => {
      const header = screen.getByRole('heading', { name: /investments/i})
      expect(header).not.toBeNull()
    })

    test('a discretionary spending header', () => {
      const header = screen.getByRole('heading', { name: /discretionary spending/i})
      expect(header).not.toBeNull()
    })
  })
})
