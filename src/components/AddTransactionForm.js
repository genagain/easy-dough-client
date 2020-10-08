import React from 'react'
import DatePicker from 'react-datepicker'

function AddTransactionForm() {
  return (
    <>
      <label htmlFor="date-input">Date:</label>
      <DatePicker id="date-input" selected={new Date(Date.now())} onChange={ () => {}} />
      <input placeholder="Description" onChange={ () => {} }/>
      <input placeholder="Amount" onChange={ () => {} }/>
    <button onClick={ () => {} }>Create Transaction</button>
    </>
  )
}

export default AddTransactionForm;
