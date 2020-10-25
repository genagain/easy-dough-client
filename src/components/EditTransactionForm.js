import React from 'react'
import DatePicker from 'react-datepicker'
import { convertIsoToDate } from '../utils'

function EditTransactionForm({transaction}) {
  const { id, date: isoDate, description, amount } = transaction

  const date = convertIsoToDate(isoDate)

  return (
    <form>
      <label htmlFor="date-input">Date:</label>
      <DatePicker id="date-input" selected={date} onChange={() => {}}/>
      <input placeholder="Description" type="text" defaultValue={description} onChange={() => {}}/>
      <input placeholder="Amount" type="text" defaultValue={amount} onChange={() => {}}/>
      <button onClick={() => {}}>Update</button>
      <button onClick={() => {}}>Cancel</button>
    </form>
  )
}

export default EditTransactionForm
