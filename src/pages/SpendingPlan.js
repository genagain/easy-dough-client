import React from 'react'
//import SpendingPlan from '../components/SpendingPlan'

function SpendingPlan() {
  const spendingPlanCategories = {
    discretionarySpending: {
      label: 'Spending Money',
      searchTerm: '*',
      expectedAmount: 0
    }
  }
    //<SpendingPlan spendingPlanCategories={spendingPlan} />
  return (
    <>
    <h1>Your Spending Plan</h1>
    </>
  )
}

export default SpendingPlan;
