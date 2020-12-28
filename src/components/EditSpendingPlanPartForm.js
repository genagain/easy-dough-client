import React, { useContext, useState } from 'react'
import UserContext from '../UserContext'
import { formatAmount } from '../utils'

function EditSpendingPlanPartForm({part, setToggleForm}) {
  const { id, label: initialLabel, searchTerm: initialSearchTerm, expectedAmount: initialExpectedAmount } = part
  const { accessToken, refetch, setRefetch } = useContext(UserContext)

  const [label, setLabel] = useState(initialLabel)
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [expectedAmount, setExpectedAmount] = useState(initialExpectedAmount)

  async function handleUpdate(e) {
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const body = {
      'label': label,
      'search_term': searchTerm,
      'expected_amount': formatAmount(expectedAmount)
    }

    await fetch(`${apiUrl}/spending_plan_parts/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
      }
    )

    setRefetch(!refetch)
    setToggleForm(false)
  }

  return (
    <div className="flex flex-col m-auto w-3/4 lg:w-full lg:flex-row lg:items-center">
      <label htmlFor="label-input" className="m-2 text-3xl lg:hidden">Label:</label>
      <input id="label-input" className="w-full text-3xl m-2 p-4 border border-gray-400 rounded lg:text-base lg:w-1/3 lg:p-2" defaultValue={initialLabel} onChange={e => setLabel(e.target.value)} />
      <label htmlFor="search-term-input" className="m-2 text-3xl lg:hidden">Search Term:</label>
      <input id="search-term-input" className="w-full text-3xl m-2 p-4 border border-gray-400 rounded lg:text-base lg:w-1/3 lg:p-2" defaultValue={initialSearchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <label htmlFor="expected-amount-input" className="m-2 text-3xl lg:hidden">Expected Amount:</label>
      <input id="expected-amount-input" className="w-full text-3xl m-2 p-4 border border-gray-400 rounded lg:text-base lg:w-2/12 lg:p-2" defaultValue={initialExpectedAmount} onChange={e => setExpectedAmount(e.target.value)} />
      <button className="w-full m-2 p-4 text-3xl bg-blue-600 text-white hover:bg-blue-500 rounded-lg lg:p-2 lg:w-1/12 lg:text-base" onClick={handleUpdate}>Update</button>
      <button className="w-full m-2 p-4 text-3xl border border-blue-600 text-blue-600 hover:border-blue-500 lg:w-1/12 hover:text-blue-500 rounded-lg lg:p-2 lg:text-base" onClick={() => setToggleForm(false)}>Cancel</button>
    </div>
  )
}

export default EditSpendingPlanPartForm
