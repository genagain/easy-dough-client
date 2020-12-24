import React, { useState } from 'react'

import AddSpendingPlanPartForm from './AddSpendingPlanPartForm'

function SpendingPlanCategory({ spendingPlanParts, category }) {
  const [showAddSpendingPlanPartForm, setShowAddSpendingPlanPartForm] = useState(false)
  const singularCategory = category === "Savings" ? "Savings Fund" : category.slice(0, -1)

  let message;
  switch(category) {
    case "Fixed Costs":
      message = (
            <p>Looks like you haven't accounted for your fixed costs. Be sure to add them as parts of your spending plan.</p>
          )
      break
    case "Savings":
      message =  (
        <p>Looks like you aren't planning to save any money. Be sure to add savings as part of your spending plan.</p>
      )
      break;
    case "Investments":
      message = (
        <p>Looks like you aren't planning to invest any money. Be sure to add investments as part of your spending plan.</p>
      )
      break
  }

  return (
    <div>
    {
      spendingPlanParts ?
      (
      <div className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
        <div className="flex flex-row bg-blue-800">
          <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-sm text-white">LABEL</div>
          <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-sm text-white">SEARCH TERM</div>
          <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:text-sm text-white">EXPECTED AMOUNT</div>
        </div>
        {
          spendingPlanParts.map(spendingPlanPart => {
            const { id, label, searchTerm, expectedAmount } = spendingPlanPart
            return (
              <div key={id} className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
                <div key={label} className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{label}</div>
                <div key={searchTerm} className="m-2 text-3xl w-4/12 lg:w-1/3 lg:m-2 lg:text-base">{searchTerm}</div>
                <div key={expectedAmount} className="m-2 text-3xl w-5/12 lg:w-1/3 lg:m-2 lg:text-base">${expectedAmount}</div>
              </div>
            )
          })
        }
      </div>
      ) :
      (
        message
      )
    }
      <button onClick={() => setShowAddSpendingPlanPartForm(!showAddSpendingPlanPartForm)}>{ showAddSpendingPlanPartForm ? `Hide ${singularCategory}` : `Add ${singularCategory}`}</button>
      {
        showAddSpendingPlanPartForm && <AddSpendingPlanPartForm singularCategory={singularCategory} category={category}/>
      }
    </div>
  )
}

export default SpendingPlanCategory
