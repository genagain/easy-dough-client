import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlan from '../SpendingPlan'

describe('The SpendingPlan component', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<SpendingPlan />)
    })

    test('the Spending Plan header', () => {
      const title = screen.getByRole("heading", { name: /your spending plan/i})
      expect(title).toHaveTextContent('Your Spending Plan')
    })
  })
})
