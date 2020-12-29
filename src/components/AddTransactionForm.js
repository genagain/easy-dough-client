import React, { useContext, useState } from 'react'
import { enUS } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import FlashMessage from 'react-flash-message'
import UserContext from '../UserContext'
import { convertDateToIso, validateAmount, formatAmount } from '../utils'

function AddTransactionForm({setToggleCreate, spendingPlanPartLabels}) {

  const { accessToken, queryParams, setQueryParams } = useContext(UserContext)

  const today = new Date(Date.now())
  const [date, setDate] = useState(today)
  const [description, setDescription] = useState()
  const [label, setLabel] = useState()
  const [amount, setAmount] = useState()
  const [flashMessage, setFlashMessage] = useState()

  async function handleAddTransaction() {
    if (!validateAmount(amount, setFlashMessage)) {
      return
    }

    const body = {
          date: convertDateToIso(date),
          description,
          label,
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
    <div className="flex flex-col m-auto w-3/4 lg:w-full lg:flex-row lg:items-center">
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
              className={`${'input' + (focused ? ' -focused' : '')} w-full lg:w-32 m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg`}
              {...inputProps}
            />
          )}
        </DatePicker>
        <label htmlFor="description-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Description:</label>
        <input id="description-input" className="w-full lg:w-40 m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" placeholder="Coffee" onChange={ e => { setDescription(e.target.value)}}/>
        <label htmlFor="label-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Label:</label>
        <select id="label-input" className="w-full lg:w-40 m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" onChange={ e => setLabel(e.target.value)}>
          {
            spendingPlanPartLabels.map(label => {
              return (
                <option key={label} value={label}>{label}</option>
              )
            })
          }
        </select>
        <label htmlFor="amount-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Amount:</label>
        <input id="amount-input" className="w-full lg:w-32 m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" placeholder="15.00" type="text" onChange={ e => { setAmount(e.target.value)}}/>
        <button className="w-full lg:w-48 m-2 p-6 bg-blue-600 hover:bg-blue-500 text-white rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg" onClick={handleAddTransaction}>Create Transaction</button>
    </div>
  )
}

export default AddTransactionForm;
