import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlanPartRow from '../SpendingPlanPartRow'

describe('the SpendingPlanPartRow component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const part = {
        id: 1,
        label: 'Spending Money',
        searchTerm: '*',
        expectedAmount: 0,
      }
      render(<SpendingPlanPartRow part={part} />)
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

    test('the update button', () => {
      const button = screen.getByRole('button', { name: /update/i })
      expect(button).not.toBeNull()
    })

    test('the delete button', () => {
      const button = screen.getByRole('button', { name: /delete/i })
      expect(button).not.toBeNull()
    })
  })
})
