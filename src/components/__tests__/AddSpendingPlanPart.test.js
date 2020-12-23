import React from 'react'
import { render, screen } from '@testing-library/react'
import UserContext from '../../UserContext'
import AddSpendingPlanPartForm from '../AddSpendingPlanPartForm'

describe('the AddSpendingPlanPartForm component for fixed costs', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<UserContext.Provider value={{}}><AddSpendingPlanPartForm category="Fixed Cost" /></UserContext.Provider>)
    })

    test('the label field', () => {
      const label = screen.getByLabelText('Label:')
      expect(label).not.toBeNull()
    })

    test('the search term field', () => {
      const searchTerm = screen.getByLabelText('Search Term:')
      expect(searchTerm).not.toBeNull()
    })

    test('the expected amount field', () => {
      const expectedAmount = screen.getByLabelText('Expected Amount:')
      expect(expectedAmount).not.toBeNull()
    })

    test('the create fixed cost butto', () => {
      const button = screen.getByRole('button', { name: "Create Fixed Cost" })
      expect(button).not.toBeNull()
    })
  })
})
