import React, { useContext, useState } from 'react'
import DatePicker from 'react-datepicker'
import UserContext from '../UserContext'
import { formatDate } from '../utils'

function AddTransactionForm() {

  const { accessToken } = useContext(UserContext)

  const [date, setDate] = useState(new Date(Date.now()))
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState()

  async function handleAddTransaction() {
    // TODO flash some sort of added message
    // TODO handle amount validation
    let currencyRegex = /^\d{0,3},{0,1}\d{0,3}\.{0,1}\d{0,2}$/

    if (!currencyRegex.test(amount)) {
      console.log('invalid currency')
      return
    }

    const body = {
          date: formatDate(date),
          description,
          amount
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
      const responseJson = await response.json()
      console.log(responseJson)
  }

  // Have a better input field for currency
  return (
    <>
      <label htmlFor="date-input">Date:</label>
      <DatePicker id="date-input" selected={date} onChange={ date => { setDate(date)}} />
      <label htmlFor="description-input">Description:</label>
      <input id="description-input" placeholder="Coffee" onChange={ e => { setDescription(e.target.value)}}/>
      <label htmlFor="amount-input">Amount:</label>
      <input id="amount-input" placeholder="15.00" type="text" onChange={ e => { setAmount(e.target.value)}}/>
      <button onClick={handleAddTransaction}>Create Transaction</button>
    </>
  )
}

export default AddTransactionForm;
