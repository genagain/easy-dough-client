import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import FlashMessage from 'react-flash-message'
import UserContext from '../UserContext'
import { convertDateToIso, validateAmount, formatAmount } from '../utils'

function AddTransactionForm({setToggleCreate}) {

  const { accessToken, queryParams, setQueryParams } = useContext(UserContext)

  const today = new Date(Date.now())
  const [date, setDate] = useState(today)
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState()
  const [flashMessage, setFlashMessage] = useState()

  async function handleAddTransaction() {
    if (!validateAmount(amount, setFlashMessage)) {
      return
    }

    const body = {
          date: convertDateToIso(date),
          description,
          amount: formatAmount(amount)
        }
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const response = await fetch(`${apiUrl}/transactions/create`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(body)
      })
      const jsonResponse = await response.json()
      const message = jsonResponse['message']
      setFlashMessage(message)

    if (response.ok) {
      setQueryParams({...queryParams})
      setTimeout( () => setToggleCreate(false), 5000)
    }
  }

  return (
    <div className="flex flex-col m-auto">
        { flashMessage &&
            <FlashMessage duration={5000}>
              <strong>{flashMessage}</strong>
            </FlashMessage>
        }
        <label htmlFor="date-input" className="my-2 text-5xl">Date:</label>
        <DatePicker id="date-input" className="my-2 p-6 border border-gray-400 rounded text-5xl" selected={date} maxDate={today} onChange={ date => { setDate(date)}} />
        <label htmlFor="description-input" className="my-2 text-5xl">Description:</label>
        <input id="description-input" className="my-2 p-6 border border-gray-400 rounded text-5xl" placeholder="Coffee" onChange={ e => { setDescription(e.target.value)}}/>
        <label htmlFor="amount-input" className="my-2 text-5xl">Amount:</label>
        <input id="amount-input" className="my-2 p-6 border border-gray-400 rounded text-5xl" placeholder="15.00" type="text" onChange={ e => { setAmount(e.target.value)}}/>
        <button className="my-2 p-6 border border-gray-400 rounded-lg text-5xl" onClick={handleAddTransaction}>Create Transaction</button>
    </div>
  )
}

export default AddTransactionForm;
