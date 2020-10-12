import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import FlashMessage from 'react-flash-message'
import UserContext from '../UserContext'
import { formatDate, formatAmount } from '../utils'

function AddTransactionForm({setToggleCreate, queryParams, setQueryParams}) {

  const { accessToken } = useContext(UserContext)

  const today = new Date(Date.now())
  const [date, setDate] = useState(today)
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState()
  const [flashMessage, setFlashMessage] = useState()

  function validateAmount(amount) {
    let validCurrency = /^\d{0,3},{0,1}\d{0,3}(\.{0,1}\d{2})?$/
    if (!validCurrency.test(amount)) {
      setFlashMessage('Please enter a valid dollar amount')
      return false
    } else {
      return true
    }
  }

  async function handleAddTransaction() {
    if (!validateAmount(amount)) {
      return
    }

    const body = {
          date: formatDate(date),
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
      setQueryParams({...queryParams})
      setTimeout( () => setToggleCreate(false), 5000)
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
