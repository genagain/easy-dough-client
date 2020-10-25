import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import FlashMessage from 'react-flash-message'
import UserContext from '../UserContext'
import { convertDateToIso, convertIsoToDate, validateAmount, formatAmount } from '../utils'

function EditTransactionForm({transaction, setToggleForm}) {
  const { id, date: initialIsoDate, description: initialDescription, amount: initialAmount } = transaction
  const { accessToken, queryParams, setQueryParams } = useContext(UserContext)
  const [date, setDate] = useState(convertIsoToDate(initialIsoDate))
  const [description, setDescription] = useState(initialDescription)
  const [amount, setAmount] = useState(initialAmount)
  const [flashMessage, setFlashMessage] = useState()

  async function handleUpdate(e){
    if (!validateAmount(amount, setFlashMessage)) {
      return
    }

    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const body = {
      'date': convertDateToIso(date),
      'description': description,
      'amount': formatAmount(amount)
    }

    await fetch(`${apiUrl}/transactions/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
      }
    )
    setToggleForm(false)
    setQueryParams({...queryParams})
  }

  return (
    <>
      { flashMessage &&
        <FlashMessage duration={5000}>
          <strong>{flashMessage}</strong>
        </FlashMessage>
      }
      <label htmlFor="date-input">Date:</label>
      <DatePicker id="date-input" selected={date} onChange={date => setDate(date)}/>
      <input placeholder="Description" type="text" defaultValue={initialDescription} onChange={e => setDescription(e.target.value)}/>
      <input placeholder="Amount" type="text" defaultValue={initialAmount} onChange={e => setAmount(e.target.value)}/>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => setToggleForm(false)}>Cancel</button>
    </>
  )
}

export default EditTransactionForm
