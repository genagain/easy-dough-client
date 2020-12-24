import React from 'react'
import { render, screen } from '@testing-library/react'
import UserContext from '../../UserContext'
import AddSpendingPlanPartForm from '../AddSpendingPlanPartForm'

describe('the AddSpendingPlanPartForm component for fixed costs', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<UserContext.Provider value={{}}><AddSpendingPlanPartForm category="Fixed Costs" /></UserContext.Provider>)
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

    test('the create fixed cost button', () => {
      const button = screen.getByRole('button', { name: "Create Fixed Cost" })
      expect(button).not.toBeNull()
    })
  })
})

describe('the AddSpendingPlanPartForm component for savings', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<UserContext.Provider value={{}}><AddSpendingPlanPartForm category="Savings" /></UserContext.Provider>)
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

    test('the create savings fund button', () => {
      const button = screen.getByRole('button', { name: "Create Savings Fund" })
      expect(button).not.toBeNull()
    })
  })
})

describe('the AddSpendingPlanPartForm component for investments', () => {
  describe('renders', () => {
    beforeEach(() => {
      render(<UserContext.Provider value={{}}><AddSpendingPlanPartForm category="Investments" /></UserContext.Provider>)
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

    test('the create investment button', () => {
      const button = screen.getByRole('button', { name: "Create Investment" })
      expect(button).not.toBeNull()
    })
  })
})


