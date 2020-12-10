import React from 'react'

function SpendingPlan({ spendingPlan }) {
  return (
    <div>
    {
      spendingPlan.map(spendingPlanCategory => {
        const { category } = spendingPlanCategory
        return (
          <h1 key={category}>{category}</h1>
        )
      })
    }
    </div>
  )
}

export default SpendingPlan;
