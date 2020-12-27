import React from 'react'

function EditSpendingPlanPartForm({part, setToggleForm}) {
  const { id, label: initialLabel, searchTerm: initialSearchTerm, expectedAmount: initialExpectedAmount } = part
  return (
    <div>
      <label htmlFor="label-input">Label:</label>
      <input id="label-input" defaultValue={initialLabel} />
      <label htmlFor="search-term-input">Search Term:</label>
      <input id="search-term-input" defaultValue={initialSearchTerm} />
      <label htmlFor="expected-amount-input">Expected Amount:</label>
      <input id="expected-amount-input" defaultValue={initialExpectedAmount} />
      <button>Update</button>
      <button onClick={() => setToggleForm(false)}>Cancel</button>
    </div>
  )
}

export default EditSpendingPlanPartForm
