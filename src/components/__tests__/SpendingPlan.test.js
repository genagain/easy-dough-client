import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlan from '../SpendingPlan'

describe('When there is only one part to render, the SpendingPlan', () => {
  beforeEach(() => {
    const spendingPlan = [
      {
        category: 'Discretionary Spending',
        parts: [
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

  test('renders a discretionary spending header', () => {
    const header = screen.getByRole('heading', { name: /discretionary spending/i})
    expect(header).not.toBeNull()
  })
})
