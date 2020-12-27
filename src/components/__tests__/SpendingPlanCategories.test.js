import React from 'react'
import { render, screen } from '@testing-library/react'
import SpendingPlanCategories from '../SpendingPlanCategories'

describe('When there is only one part to render, the SpendingPlanCategories', () => {
  beforeEach(() => {
    const spendingPlanCategories = {
        discretionarySpending: {
          label: 'Spending Money',
          searchTerm: '*',
          expectedAmount: 0
        }
      }
    render(<SpendingPlanCategories spendingPlanCategories={spendingPlanCategories} />)
  })

  describe('renders', () => {
    test('the fixed costs header', () => {
      const header = screen.getByRole('heading', { name: /fixed costs/i})
      expect(header).not.toBeNull()
    })

    test('the add fixed cost button', () => {
      const button = screen.getByRole('button', { name: /add fixed cost/i})
      expect(button).not.toBeNull()
    })

    test('the message about not accounting for your fixed costs', () => {
      const message = screen.getByText(/looks like you haven't accounted for your fixed costs\. be sure to add them as parts of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the savings header', () => {
      const header = screen.getByRole('heading', { name: /savings/i})
      expect(header).not.toBeNull()
    })

    test('the add savings fund button', () => {
      const button = screen.getByRole('button', { name: /add savings fund/i})
      expect(button).not.toBeNull()
    })

    test('the message about not saving', () => {
      const message = screen.getByText(/looks like you aren't planning to save any money\. be sure to add savings as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the investments header', () => {
      const header = screen.getByRole('heading', { name: /investments/i})
      expect(header).not.toBeNull()
    })

    test('the add investment button', () => {
      const button = screen.getByRole('button', { name: /add investment/i})
      expect(button).not.toBeNull()
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
        'EXPECTED AMOUNT'
      ]

      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeaderText = screen.getAllByText(columnHeader)
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

describe('When there are two parts to render, the SpendingPlanCategories', () => {
  describe('renders', () => {
    beforeEach(() => {
      const spendingPlanCategories = {
        fixedCosts: [
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
            expectedAmount: 40
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
        ],
        discretionarySpending: {
          label: 'Spending Money',
          searchTerm: '*',
          expectedAmount: 0
        }
      }
      render(<SpendingPlanCategories spendingPlanCategories={spendingPlanCategories} />)
    })

    test('the spending plan parts table headers', () => {
      const expectedColumnHeaders = [
        'LABEL',
        'SEARCH TERM',
        'EXPECTED AMOUNT'
      ]

      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeadersText = screen.getAllByText(columnHeader)
        expect(columnHeadersText).toHaveLength(2)
      })
    })

    test('the fixed costs header', () => {
      const header = screen.getByRole('heading', { name: /fixed costs/i})
      expect(header).not.toBeNull()
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

    test('the discretionary spending header', () => {
      const header = screen.getByRole('heading', { name: /discretionary spending/i})
      expect(header).not.toBeNull()
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

    test('the savings header', () => {
      const header = screen.getByRole('heading', { name: /savings/i})
      expect(header).not.toBeNull()
    })

    test('the add savings fund button', () => {
      const button = screen.getByRole('button', { name: /add savings fund/i})
      expect(button).not.toBeNull()
    })

    test('the message about not saving', () => {
      const message = screen.getByText(/looks like you aren't planning to save any money\. be sure to add savings as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })

    test('the investments header', () => {
      const header = screen.getByRole('heading', { name: /investments/i})
      expect(header).not.toBeNull()
    })

    test('the add investment button', () => {
      const button = screen.getByRole('button', { name: /add investment/i})
      expect(button).not.toBeNull()
    })

    test('the message about not investing', () => {
      const message = screen.getByText(/looks like you aren't planning to invest any money\. be sure to add investments as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })
  })
})

describe('When there are three parts to render, the SpendingPlanCategories', () => {
  describe('renders', () => {
    beforeEach(() => {
      const spendingPlanCategories = {
        fixedCosts: [
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
        ],
        savings: [
          {
            id: 6,
            label: 'Emergency Fund',
            searchTerm: 'Employer',
            expectedAmount: 800
          }
        ],
        discretionarySpending: {
          label: 'Spending Money',
          searchTerm: '*',
          expectedAmount: 0
        }
      }
      render(<SpendingPlanCategories spendingPlanCategories={spendingPlanCategories} />)
    })

    test('the spending plan parts table headers', () => {
      const expectedColumnHeaders = [
        'LABEL',
        'SEARCH TERM',
        'EXPECTED AMOUNT'
      ]

      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeadersText = screen.getAllByText(columnHeader)
        expect(columnHeadersText).toHaveLength(3)
      })
    })

    test('the fixed costs header', () => {
      const header = screen.getByRole('heading', { name: /fixed costs/i})
      expect(header).not.toBeNull()
    })

    test('the add fixed cost button', () => {
      const button = screen.getByRole('button', { name: /add fixed cost/i})
      expect(button).not.toBeNull()
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

    test('each expected amount for each fixed cost', () => {
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

    test('the savings header', () => {
      const header = screen.getByRole('heading', { name: /savings/i})
      expect(header).not.toBeNull()
    })

    test('the add savings fund button', () => {
      const button = screen.getByRole('button', { name: /add savings fund/i})
      expect(button).not.toBeNull()
    })

    test('each label for each savings goal', () => {
      const expectedLabels = [
        'Emergency Fund'
      ]

      expectedLabels.forEach(expectedLabel => {
        const label = screen.getByText(expectedLabel)
        expect(label).not.toBeNull()
      })
    })

    test('each expected monthly amount for each savings goal', () => {
      const expectedMonthlyAmounts = [
        '$800'
      ]

      expectedMonthlyAmounts.forEach(expectedMonthlyAmount => {
        const monthlyAmount = screen.getByText(expectedMonthlyAmount)
        expect(monthlyAmount).not.toBeNull()
      })
    })

    test('each expected amount for each savings goal', () => {
      const expectedSearchTerms = [
        'Employer'
      ]

      expectedSearchTerms.forEach(expectedSearchTerm => {
        const searchTerm = screen.getByText(expectedSearchTerm)
        expect(searchTerm).not.toBeNull()
      })
    })

    test('the discretionary spending header', () => {
      const header = screen.getByRole('heading', { name: /discretionary spending/i})
      expect(header).not.toBeNull()
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

    test('the investments header', () => {
      const header = screen.getByRole('heading', { name: /investments/i})
      expect(header).not.toBeNull()
    })

    test('the add investment button', () => {
      const button = screen.getByRole('button', { name: /add investment/i})
      expect(button).not.toBeNull()
    })

    test('the message about not investing', () => {
      const message = screen.getByText(/looks like you aren't planning to invest any money\. be sure to add investments as part of your spending plan\./i)
      expect(message).not.toBeNull()
    })
  })
})

describe('When there are four parts to render, the SpendingPlanCategories', () => {
  describe('renders', () => {
    beforeEach(() => {
      const spendingPlanCategories = {
        fixedCosts: [
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
        ],
        savings: [
          {
            id: 6,
            label: 'Emergency Fund',
            searchTerm: 'Employer',
            expectedAmount: 800
          }
        ],
        investments: [
          {
            id: 7,
            label: 'Index Fund',
            searchTerm: 'Brokerage Firm',
            expectedAmount: 400
          }
        ],
        discretionarySpending: {
          label: 'Spending Money',
          searchTerm: '*',
          expectedAmount: 0
        }
      }
      render(<SpendingPlanCategories spendingPlanCategories={spendingPlanCategories} />)
    })

    test('the spending plan parts table headers', () => {
      const expectedColumnHeaders = [
        'LABEL',
        'SEARCH TERM',
        'EXPECTED AMOUNT'
      ]

      expectedColumnHeaders.forEach(columnHeader => {
        const columnHeadersText = screen.getAllByText(columnHeader)
        expect(columnHeadersText).toHaveLength(4)
      })
    })

    test('the fixed costs header', () => {
      const header = screen.getByRole('heading', { name: /fixed costs/i})
      expect(header).not.toBeNull()
    })

    test('the add fixed cost button', () => {
      const button = screen.getByRole('button', { name: /add fixed cost/i})
      expect(button).not.toBeNull()
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

    test('each expected amount for each fixed cost', () => {
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


    test('the savings header', () => {
      const header = screen.getByRole('heading', { name: /savings/i})
      expect(header).not.toBeNull()
    })

    test('the add savings fund button', () => {
      const button = screen.getByRole('button', { name: /add savings fund/i})
      expect(button).not.toBeNull()
    })

    test('each label for each savings goal', () => {
      const expectedLabels = [
        'Emergency Fund'
      ]

      expectedLabels.forEach(expectedLabel => {
        const label = screen.getByText(expectedLabel)
        expect(label).not.toBeNull()
      })
    })

    test('each expected monthly amount for each savings goal', () => {
      const expectedMonthlyAmounts = [
        '$800'
      ]

      expectedMonthlyAmounts.forEach(expectedMonthlyAmount => {
        const monthlyAmount = screen.getByText(expectedMonthlyAmount)
        expect(monthlyAmount).not.toBeNull()
      })
    })

    test('each expected amount for each savings goal', () => {
      const expectedSearchTerms = [
        'Employer'
      ]

      expectedSearchTerms.forEach(expectedSearchTerm => {
        const searchTerm = screen.getByText(expectedSearchTerm)
        expect(searchTerm).not.toBeNull()
      })
    })

    test('the investments header', () => {
      const header = screen.getByRole('heading', { name: /investments/i})
      expect(header).not.toBeNull()
    })

    test('the add investment button', () => {
      const button = screen.getByRole('button', { name: /add investment/i})
      expect(button).not.toBeNull()
    })

    test('each label for each investment', () => {
      const expectedLabels = [
        'Index Fund'
      ]

      expectedLabels.forEach(expectedLabel => {
        const label = screen.getByText(expectedLabel)
        expect(label).not.toBeNull()
      })
    })

    test('each expected monthly amount for each investment', () => {
      const expectedMonthlyAmounts = [
        '$400'
      ]

      expectedMonthlyAmounts.forEach(expectedMonthlyAmount => {
        const monthlyAmount = screen.getByText(expectedMonthlyAmount)
        expect(monthlyAmount).not.toBeNull()
      })
    })

    test('each expected amount for each investment', () => {
      const expectedSearchTerms = [
        'Brokerage Firm'
      ]

      expectedSearchTerms.forEach(expectedSearchTerm => {
        const searchTerm = screen.getByText(expectedSearchTerm)
        expect(searchTerm).not.toBeNull()
      })
    })


    test('the discretionary spending header', () => {
      const header = screen.getByRole('heading', { name: /discretionary spending/i})
      expect(header).not.toBeNull()
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
