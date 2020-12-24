import React, { useState } from 'react'

function AddSpendingPlanPartForm({ category }) {
  const [label, setLabel] = useState()
  const [searchTerm, setSearchTerm] = useState()
  const [expectedAmount, setExpectedAmount] = useState()
  
  async function handleAddSpendingPlanPart() {
    const body = {
      category,
      label,
      'search_term': searchTerm,
      'expected_amount': expectedAmount
    }
    console.log(body)
  }

  return (
    <div>
      <label htmlFor="label-input">Label:</label>
      <input id="label-input" onChange={ e => setLabel(e.target.value) } />
      <label htmlFor="label-search-term">Search Term:</label>
      <input id="label-search-term" onChange={ e => setSearchTerm(e.target.value) } />
      <label htmlFor="label-expected-amount">Expected Amount:</label>
      <input id="label-expected-amount" onChange={ e => setExpectedAmount(e.target.value) }/>
      <button onClick={handleAddSpendingPlanPart} >{ category === 'Savings' ? `Create Savings Fund`  : `Create ${category.slice(0,-1)}`}</button>
    </div>
  )
}

export default AddSpendingPlanPartForm
