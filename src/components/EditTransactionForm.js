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
    <div className="flex flex-col m-auto w-2/3">
      { flashMessage &&
        <FlashMessage duration={5000}>
          <strong>{flashMessage}</strong>
        </FlashMessage>
      }
      <label htmlFor="date-input" className="my-2 text-5xl">Date:</label>
      <DatePicker id="date-input" className="my-2 p-6 w-full rounded text-5xl" selected={date} onChange={date => setDate(date)}/>
      <input className="my-2 p-6 rounded text-5xl" placeholder="Description" type="text" defaultValue={initialDescription} onChange={e => setDescription(e.target.value)}/>
      <input className="my-2 p-6 rounded text-5xl" placeholder="Amount" type="text" defaultValue={initialAmount} onChange={e => setAmount(e.target.value)}/>
      <button className="my-2 p-6 border border-gray-400 rounded-lg text-5xl" onClick={handleUpdate}>Update</button>
      <button className="my-2 p-6 border border-gray-400 rounded-lg text-5xl" onClick={() => setToggleForm(false)}>Cancel</button>
    </div>
  )
}

export default EditTransactionForm
