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
        <div className="flex flex-row items-baseline">
        <div className="m-2 text-3xl w-3/12">{label}</div>
        <div className="m-2 text-3xl w-4/12">{searchTerm}</div>
        <div className="m-2 text-3xl w-1/12">${expectedAmount}</div>
        <button className="w-2/12 text-blue-800 hover:text-blue-700 text-3xl lg:text-base" onClick={() => setToggleForm(true)}>Edit</button>
        <button className="w-2/12 text-red-800 hover:text-red-700 text-3xl lg:text-base">Delete</button>
        </div>
      )
    }
    </div>
  )
}

export default SpendingPlanPartRow
