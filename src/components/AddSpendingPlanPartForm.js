import React from 'react'

function AddSpendingPlanPartForm({ category }) {
  return (
    <div>
      <label htmlFor="label-input">Label:</label>
      <input id="label-input" />
      <label htmlFor="label-search-term">Search Term:</label>
      <input id="label-search-term" />
      <label htmlFor="label-expected-amount">Expected Amount:</label>
      <input id="label-expected-amount" />
      <button>{ category === 'Savings' ? `Create Savings Fund`  : `Create ${category.slice(0,-1)}`}</button>
    </div>
  )
}

export default AddSpendingPlanPartForm
