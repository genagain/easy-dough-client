import React from 'react'

import SpendingPlanCategory from './SpendingPlanCategory'
import SpendingPlanPartRow from './SpendingPlanPartRow'
function SpendingPlanCategories({ spendingPlanCategories }) {
  const { fixedCosts, savings, investments, discretionarySpending} = spendingPlanCategories

  // TODO consider moving the button and the form back out to here
  return (
    <div>
      <h1 className="my-2 text-5xl lg:text-2xl">Fixed Costs</h1>
      <SpendingPlanCategory spendingPlanParts={fixedCosts} category="Fixed Costs" />
      <h1 className="my-2 text-5xl lg:text-2xl">Savings</h1>
      <SpendingPlanCategory spendingPlanParts={savings} category="Savings" />
      <h1 className="my-2 text-5xl lg:text-2xl">Investments</h1>
      <SpendingPlanCategory spendingPlanParts={investments} category="Investments" />
      <h1 className="my-2 text-5xl lg:text-2xl">Discretionary Spending</h1>
      <div className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
        <div className="flex flex-row bg-blue-800">
          <div className="m-2 text-white w-3/12 lg:w-1/3 text-3xl lg:text-sm">LABEL</div>
          <div className="m-2 text-white w-4/12 lg:w-1/3 text-3xl lg:text-sm">SEARCH TERM</div>
          <div className="m-2 text-white w-5/12 lg:w-1/3 text-3xl lg:text-sm">EXPECTED AMOUNT</div>
       </div>
       <SpendingPlanPartRow part={discretionarySpending} category={'Discretionary Spending'}/>
      </div>
      
    </div>
  )
}

export default SpendingPlanCategories;
