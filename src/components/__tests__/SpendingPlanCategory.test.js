import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlanCategory from '../SpendingPlanCategory'

import UserContext from '../../UserContext'

describe('The SpendingPlanCategory component with spending plan parts for fixed costs', () => {
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
      render(<UserContext.Provider value={{}}><SpendingPlanCategory category="Fixed Costs" spendingPlanParts={fixedCosts}/></UserContext.Provider>)
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

describe('The SpendingPlanCategory component with spending plan parts for savings', () => {
  describe('renders', () => {
    beforeEach(() => {
      const savings = [
        {
          id: 1,
          label: 'Emergency Fund',
          searchTerm: 'Employer',
          expectedAmount: 800
        }
      ]
      render(<UserContext.Provider value={{}}><SpendingPlanCategory category="Savings" spendingPlanParts={savings}/></UserContext.Provider>)
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
      const expectedLabel = 'Emergency Fund'
      const label = screen.getByText(expectedLabel)
      expect(label).not.toBeNull()
    })

    test('each search term for each fixed cost', () => {
      const expectedSearchTerm = "Employer"
      const searchTerm = screen.getByText(expectedSearchTerm)
      expect(searchTerm).not.toBeNull()
    })

    test('each expected monthly amount for each fixed cost', () => {
      const expectedMonthlyAmount = "$800"
      const monthlyAmount = screen.getByText(expectedMonthlyAmount)
      expect(monthlyAmount).not.toBeNull()
    })

    test('the add savings fund button', () => {
      const button = screen.getByRole('button', { name: /add savings fund/i})
      expect(button).not.toBeNull()
    })
  })
})


describe('The SpendingPlanCategory component without spending plan parts', () => {
  describe('renders', () => {
    test('the appropriate message when the category is fixed costs', () => {
      render(<SpendingPlanCategory category="Fixed Costs" spendingPlanParts={undefined}/>)
      const message = screen.getByText(/looks like you haven't accounted for your fixed costs\. be sure to add them as parts of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the add fixed cost button when the category is fixed costs', () => {
      render(<SpendingPlanCategory category="Fixed Costs" spendingPlanParts={undefined}/>)
      const button = screen.getByRole('button', { name: /add fixed cost/i})
      expect(button).not.toBeNull()
    })

    test('the appropriate message when the category is savings', () => {
      render(<SpendingPlanCategory category="Savings" spendingPlanParts={undefined}/>)
      const message = screen.getByText(/looks like you aren\'t planning to save any money\. be sure to add savings as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the add savings fund button when the category is savings', () => {
      render(<SpendingPlanCategory category="Savings" spendingPlanParts={undefined}/>)
      const button = screen.getByRole('button', { name: /add savings fund/i})
      expect(button).not.toBeNull()
    })

    test('the appropriate message when the category is investments', () => {
      render(<SpendingPlanCategory category="Investments" spendingPlanParts={undefined}/>)
      const message = screen.getByText(/looks like you aren't planning to invest any money\. be sure to add investments as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the add investmtent button when the category is investments', () => {
      render(<SpendingPlanCategory category="Investments" spendingPlanParts={undefined}/>)
      const button = screen.getByRole('button', { name: /add investment/i})
      expect(button).not.toBeNull()
    })
  })
})



//TODO account for no spending parts for fixed costs, savings and investments
//TODO account for add savings fund button for savings
