import React, { useContext } from 'react'
import DatePicker from 'react-datepicker'
import UserContext from '../UserContext'
import { convertIsoToDate } from '../utils'

function EditTransactionForm({transaction, setToggleForm}) {
  const { id, date: isoDate, description, amount } = transaction
  const { accessToken, queryParams, setQueryParams } = useContext(UserContext)
  const date = convertIsoToDate(isoDate)

  // TODO same validation logic as adding transaction
  async function handleUpdate(e){
    const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
    const body = {
      'date': '2020-10-24',
      'description': 'Something hilarious',
      'amount': '69.00'
    }

     await fetch(`${apiUrl}/transactions/${id}`,
       {
         method: 'PUT',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${accessToken}`
         },
         body: JSON.stringify(body)
       })
        setToggleForm(false)
        setQueryParams({...queryParams})
   }

  return (
    <>
      <label htmlFor="date-input">Date:</label>
      <DatePicker id="date-input" selected={date} onChange={() => {}}/>
      <input placeholder="Description" type="text" defaultValue={description} onChange={() => {}}/>
      <input placeholder="Amount" type="text" defaultValue={amount} onChange={() => {}}/>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => {setToggleForm(false)}}>Cancel</button>
    </>
  )
}

export default EditTransactionForm
