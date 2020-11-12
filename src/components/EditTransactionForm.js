import React, { useContext, useState } from 'react'
import { enUS } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
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
    <div className="flex flex-col m-auto w-2/3 lg:w-full lg:flex-row lg:items-center">
      { flashMessage &&
        <FlashMessage duration={5000}>
          <strong>{flashMessage}</strong>
        </FlashMessage>
      }
      <label htmlFor="date-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Date:</label>
      <DatePicker date={date} onDateChange={setDate} locale={enUS}>
        {({ inputProps, focused }) => (
          <input
            id="date-input"
            className={`${'input' + (focused ? ' -focused' : '')} m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg`}
            {...inputProps}
          />
        )}
      </DatePicker>
      <label htmlFor="description-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Description:</label>
      <input id="description-input" className="m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" placeholder="Coffee" type="text" defaultValue={initialDescription} onChange={e => setDescription(e.target.value)}/>
      <label htmlFor="amount-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Amount:</label>
      <input id="amount-input" className="m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" placeholder="5.00" type="text" defaultValue={initialAmount} onChange={e => setAmount(e.target.value)}/>
      <button className="lg:h-12 m-2 p-6 border border-gray-400 rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg" onClick={handleUpdate}>Update</button>
      <button className="lg:h-12 m-2 p-6 border border-gray-400 rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg" onClick={() => setToggleForm(false)}>Cancel</button>
    </div>
  )
}

export default EditTransactionForm
