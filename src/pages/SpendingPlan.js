import React from 'react'
import SpendingPlanCategories from '../components/SpendingPlanCategories'

function SpendingPlan() {
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
        expectedAmount: 1000
      }
    ],
    investments: [
      {
        id: 7,
        label: 'Index Fund',
        searchTerm: 'Brokerage Firm',
        expectedAmount: 1000
      }
    ],
    discretionarySpending: {
      label: 'Spending Money',
      searchTerm: '*',
      expectedAmount: 0
    }
  }

  return (
    <div className="flex flex-col">
      <div className="m-auto w-10/12 lg:max-w-6xl">
        <h1 className="mb-2 text-6xl lg:text-3xl">Your Spending Plan</h1>
        <SpendingPlanCategories spendingPlanCategories={spendingPlanCategories} />
      </div>
    </div>
  )
}

export default SpendingPlan;
