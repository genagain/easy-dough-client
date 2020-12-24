import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'
import { formatAmount } from '../utils'

// TODO consider making refetch and setRefetch part of context
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
      'expected_amount': formatAmount(expectedAmount)
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
      <label htmlFor="label-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Label:</label>
      <input id="label-input" className="w-full lg:w-auto m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" onChange={ e => setLabel(e.target.value) } />
      <label htmlFor="label-search-term" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Search Term:</label>
      <input id="label-search-term" className="w-full lg:w-auto m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" onChange={ e => setSearchTerm(e.target.value) } />
      <label htmlFor="label-expected-amount" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Expected Amount:</label>
      <input id="label-expected-amount" className="w-full lg:w-auto m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" onChange={ e => setExpectedAmount(e.target.value) }/>
      <button className="w-full lg:w-48 m-2 p-6 bg-blue-600 hover:bg-blue-500 text-white rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg" onClick={handleAddSpendingPlanPart} >{ category === 'Savings' ? `Create Savings Fund`  : `Create ${category.slice(0,-1)}`}</button>
    </div>
  )
}

export default AddSpendingPlanPartForm
