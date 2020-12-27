import React, { useState } from 'react'

import SpendingPlanPartRow from './SpendingPlanPartRow'
import AddSpendingPlanPartForm from './AddSpendingPlanPartForm'

function SpendingPlanCategory({ spendingPlanParts, category, refetch, setRefetch }) {
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
    default:
      break
  }

  // TODO style table like the Transaction table more
  return (
    <div>
    {
      spendingPlanParts ?
      (
      <div key={category} className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
        <div className="flex flex-row bg-blue-800">
          <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:text-sm text-white">LABEL</div>
          <div className="m-2 text-3xl w-4/12 lg:w-1/3 lg:text-sm text-white">SEARCH TERM</div>
          <div className="m-2 text-3xl w-5/12 lg:w-1/3 lg:text-sm text-white">EXPECTED AMOUNT</div>
        </div>
        {
          spendingPlanParts.map(part => {
            return (
              <SpendingPlanPartRow key={part.id} part={part} category={category} />
            )
          })
        }
      </div>
      ) :
      (
        message
      )
    }
    <div className="m-auto w-3/4 my-4 lg:m-0 lg:w-full">
      <button className="w-full lg:w-auto p-6 bg-blue-800 hover:bg-blue-700 text-white rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-base" onClick={() => setShowAddSpendingPlanPartForm(!showAddSpendingPlanPartForm)}>{ showAddSpendingPlanPartForm ? `Hide ${singularCategory}` : `Add ${singularCategory}`}</button>
    </div>
      {
        showAddSpendingPlanPartForm && <AddSpendingPlanPartForm singularCategory={singularCategory} category={category} refetch={refetch} setRefetch={setRefetch} setShowAddSpendingPlanPartForm={setShowAddSpendingPlanPartForm}/>
      }
    </div>
  )
}

export default SpendingPlanCategory
