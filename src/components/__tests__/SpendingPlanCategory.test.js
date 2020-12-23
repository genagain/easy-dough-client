import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlanCategory from '../SpendingPlanCategory'

import UserContext from '../../UserContext'

describe('The SpendingPlanCategory component', () => {
  describe('renders', () => {
    beforeEach(() => {
      const fixedCosts = [
        {
          id: 1,
          label: 'Rent',
          searchTerm: 'Property Management Company',
          expectedAmount: 1000
        },
        {
          id: 2,
          label: 'Electricity',
          searchTerm: 'Electic Company',
          expectedAmount: 40
        },
        {
          id: 3,
          label: 'Gas',
          searchTerm: 'Gas Company',
          expectedAmount: 20
        },
        {
          id: 4,
          label: 'Internet',
          searchTerm: 'Internet Provider',
          expectedAmount: 60
        },
        {
          id: 5,
          label: 'Groceries',
          searchTerm: 'Grocery Store',
          expectedAmount: 300
        }
      ]
      render(<SpendingPlanCategory category="Fixed Costs" spendingPlanParts={fixedCosts}/>)
    })

    test('the spending plan parts table headers', () => {
      const expectedColumnHeaders = [
        'LABEL',
        'SEARCH TERM',
        'EXPECTED AMOUNT'
      ]

      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeaderText = screen.getByText(columnHeader)
        expect(columnHeader).not.toBeNull()
      })
    })

    test('each label for each fixed cost', () => {
      const expectedLabels = [
        'Rent',
        'Electricity',
        'Gas',
        'Internet',
        'Groceries'
      ]

      expectedLabels.forEach(expectedLabel => {
        const label = screen.getByText(expectedLabel)
        expect(label).not.toBeNull()
      })
    })

    test('each search term for each fixed cost', () => {
      const expectedSearchTerms = [
        'Property Management Company',
        'Electic Company',
        'Gas Company',
        'Internet Provider',
        'Grocery Store'
      ]

      expectedSearchTerms.forEach(expectedSearchTerm => {
        const searchTerm = screen.getByText(expectedSearchTerm)
        expect(searchTerm).not.toBeNull()
      })
    })

    test('each expected monthly amount for each fixed cost', () => {
      const expectedMonthlyAmounts = [
        '$1000',
        '$40',
        '$20',
        '$60',
        '$300'
      ]

      expectedMonthlyAmounts.forEach(expectedMonthlyAmount => {
        const monthlyAmount = screen.getByText(expectedMonthlyAmount)
        expect(monthlyAmount).not.toBeNull()
      })
    })

    test('the add fixed cost button', () => {
      const button = screen.getByRole('button', { name: /add fixed cost/i})
      expect(button).not.toBeNull()
    })
  })
})


//TODO account for no spending parts for fixed costs, savings and investments
//TODO account for add savings fund button for savings
