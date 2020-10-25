import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import FlashMessage from 'react-flash-message'
import UserContext from '../UserContext'
import { convertDateToIso, formatAmount, validateAmount } from '../utils'

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
    <>
      { flashMessage &&
          <FlashMessage duration={5000}>
            <strong>{flashMessage}</strong>
          </FlashMessage>
      }
      <label htmlFor="date-input">Date:</label>
      <DatePicker id="date-input" selected={date} maxDate={today} onChange={ date => { setDate(date)}} />
      <label htmlFor="description-input">Description:</label>
      <input id="description-input" placeholder="Coffee" onChange={ e => { setDescription(e.target.value)}}/>
      <label htmlFor="amount-input">Amount:</label>
      <input id="amount-input" placeholder="15.00" type="text" onChange={ e => { setAmount(e.target.value)}}/>
      <button onClick={handleAddTransaction}>Create Transaction</button>
    </>
  )
}

export default AddTransactionForm;
