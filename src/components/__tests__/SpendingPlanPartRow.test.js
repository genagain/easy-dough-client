import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlanPartRow from '../SpendingPlanPartRow'

describe('the SpendingPlanPartRow component for discretionary spending', () => {
  beforeEach(() => {
    const part = {
      id: 1,
      label: 'Spending Money',
      searchTerm: '*',
      expectedAmount: 0,
    }
    render(<SpendingPlanPartRow part={part} category={'Discretionary Spending'}/>)
  })

  describe('renders', () => {
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

    test('the edit button', () => {
      const button = screen.getByRole('button', { name: /edit/i })
      expect(button).not.toBeNull()
    })
  })

  describe('does not render', () => {
    test('the delete button', () => {
      const button = screen.queryByRole('button', { name: /delete/i })
      expect(button).toBeNull()
    })
  })
})
