import React, { useState } from 'react'

import SpendingPlanCategory from './SpendingPlanCategory'

        //) : <p>Looks like you haven't accounted for your fixed costs. Be sure to add them as parts of your spending plan.</p>
function SpendingPlanCategories({ spendingPlanCategories }) {
  const { fixedCosts, savings, investments, discretionarySpending} = spendingPlanCategories

  const [visibleSpendingPlanCategoryForm, setVisibleSpendingPlanCategoryForm] = useState()

  // TODO create a SpendingPlanCategory Component that can take in an array or an object
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
          <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-sm text-white">LABEL</div>
          <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-sm text-white">SEARCH TERM</div>
          <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:text-sm text-white">EXPECTED AMOUNT</div>
       </div>

        <div className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
          <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{discretionarySpending.label}</div>
          <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:m-2 lg:text-base">{discretionarySpending.searchTerm}</div>
          <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:m-2 lg:text-base">${discretionarySpending.expectedAmount}</div>
        </div>
      </div>
      
    </div>
  )
}

export default SpendingPlanCategories;
