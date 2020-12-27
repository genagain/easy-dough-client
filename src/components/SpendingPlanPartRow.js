import React, { useState } from 'react'
import EditSpendingPlanPartForm from './EditSpendingPlanPartForm'

function SpendingPlanPartRow({ part }) {
  const { label, searchTerm, expectedAmount } = part
  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div className="lg:border-gray-600 lg:border-t">
    {
      toggleForm ?
      <EditSpendingPlanPartForm part={part} setToggleForm={setToggleForm} />
      :
      (
        <div className="flex flex-row lg:items-baseline">
        <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{label}</div>
        <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{searchTerm}</div>
        <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">${expectedAmount}</div>
        <button onClick={() => setToggleForm(true)}>Edit</button>
        <button>Delete</button>
        </div>
      )
    }
    </div>
  )
}

export default SpendingPlanPartRow
