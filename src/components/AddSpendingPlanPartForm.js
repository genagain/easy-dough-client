import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'

function AddSpendingPlanPartForm({ category, refetch, setRefetch, setShowAddSpendingPlanPartForm }) {

  const { accessToken } = useContext(UserContext)

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

    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const response = await fetch(`${apiUrl}/spending_plan_parts/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
      })
    const jsonResponse = await response.json()
    setRefetch(!refetch)
    setShowAddSpendingPlanPartForm(false)
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
