import React from 'react'

function SpendingPlan({ spendingPlan }) {
  const { fixedCosts } = spendingPlan
  return (
    <div>
      <h1>Fixed Costs</h1>
      { 
        fixedCosts ? null : <p>Looks like you haven't accounted for your fixed costs. Be sure to add them as parts of your spending plan</p>
      }
      <h1>Savings</h1>
      <h1>Investments</h1>
      <h1>Discretionary Spending</h1>
    </div>
  )
}

export default SpendingPlan;
