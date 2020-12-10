import React from 'react'

function SpendingPlan({ spendingPlan }) {
  const { fixedCosts, savings, investments, discretionarySpending} = spendingPlan
  return (
    <div>
      <h1>Fixed Costs</h1>
      { 
        fixedCosts ? null : <p>Looks like you haven't accounted for your fixed costs. Be sure to add them as parts of your spending plan.</p>
      }
      <h1>Savings</h1>
      {
        savings ? null : <p>Looks like you aren't planning to save any money. Be sure to add savings as part of your spending plan.</p>
      }
      <h1>Investments</h1>
      {
        investments ? null : <p>Looks like you aren't planning to invest any money. Be sure to add investments as part of your spending plan.</p>
      }
      <h1>Discretionary Spending</h1>
      <div>
        <div>LABEL</div>
        <div>SEARCH TERM</div>
        <div>EXPECTED MONTHLY AMOUNT</div>
      </div>
      <div>
        <div>{discretionarySpending.label}</div>
        <div>{discretionarySpending.searchTerm}</div>
        <div>${discretionarySpending.expectedAmount}</div>
      </div>
      
    </div>
  )
}

export default SpendingPlan;
