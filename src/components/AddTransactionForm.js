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
      <input placeholder="Description" onChange={ e => { setDescription(e.target.value)}}/>
      <input placeholder="Amount" onChange={ e => { setAmount(e.target.value)}}/>
      <button onClick={handleAddTransaction}>Create Transaction</button>
    </>
  )
}

export default AddTransactionForm;