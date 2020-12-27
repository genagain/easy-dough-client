import React from 'react'

function SpendingPlanPartRow({ part }) {
  const { label, searchTerm, expectedAmount } = part
  return (
    <div className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
      <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{label}</div>
      <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">{searchTerm}</div>
      <div className="m-2 text-3xl w-3/12 lg:w-1/3 lg:m-2 lg:text-base">${expectedAmount}</div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default SpendingPlanPartRow
