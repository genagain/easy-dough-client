import React from 'react'

function SpendingPlanPartRow({ part }) {
  const { label, searchTerm, expectedAmount } = part
  return (
    <div>
      <div>{label}</div>
      <div>{searchTerm}</div>
      <div>${expectedAmount}</div>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )
}

export default SpendingPlanPartRow
