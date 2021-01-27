import React, { useContext, useState, useEffect } from 'react'
import { getDay } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import TransactionsTableList from '../components/TransactionsTableList'
import AddTransactionForm from '../components/AddTransactionForm'
import UserContext from '../UserContext'
import { convertDateToIso, convertIsoToDate } from '../utils'

function Transactions() {

  const { accessToken, logout, queryParams, setQueryParams } = useContext(UserContext)

  const [toggleCreate, setToggleCreate] = useState(false)

  const initialEndDate = convertIsoToDate(queryParams.end_date)
  const initialStartDate = convertIsoToDate(queryParams.start_date)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [startDate, setStartDate] = useState(initialStartDate)

  const [searchTerm, setSearchTerm] = useState()


  const [allTransactions, setAllTransactions] = useState([])
  const [spendingPlanPartLabels, setSpendingPlanPartLabels] = useState([])

  const startDateModifiers = {
      disabled: date => date > Date.now() || date > endDate
  }

  const endDateModifiers = {
      disabled: date => date > Date.now() || startDate > date
  }

  const modifiers = {
      disabled: date => date > Date.now()
  }

  const modifiersClassNames = {
      selected: '-selected'
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      return
    }
    const fetchTransactions = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const searchParams = new URLSearchParams(queryParams)

      const response = await fetch(`${apiUrl}/transactions?${searchParams}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        })

      if (response.ok) {
        const transactions = await response.json()
        setAllTransactions(transactions)
      } else {
        logout()
      }
    }

    fetchTransactions()
  }, [accessToken, logout, queryParams])

  useEffect(() => {
    const fetchSpendingPlanCategories = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const response = await fetch(`${apiUrl}/spending_plan_parts?field=label`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }
      )

      const json = await response.json()

      if (!response.ok) {
        logout()
      }

      const labels = json['spending_plan_part_labels']
      setSpendingPlanPartLabels(labels)
    }

    fetchSpendingPlanCategories()
  }, [accessToken, logout])

  function searchHandler() {
    const params = {
      start_date: convertDateToIso(startDate),
      end_date: convertDateToIso(endDate)
    }

    // TODO Handle search term validation
    if (searchTerm) {
      params['search_term'] = searchTerm
    }

    setQueryParams(params)
  }

  return (
    <div className="flex flex-col">
      <div className="m-auto w-10/12 lg:max-w-6xl">
        <h1 className="mb-2 text-6xl lg:text-3xl">Transaction History</h1>
        <div className="flex flex-col m-auto w-3/4 lg:w-full lg:flex-row lg:items-center">
          <label htmlFor="startdate-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">Start Date:</label>
          <DatePicker date={startDate} onDateChange={setStartDate} locale={enUS} modifiers={startDateModifiers} modifiersClassNames={modifiersClassNames}>
          {({ inputProps, focused }) => (
                    <input
                      id="startdate-input" 
                      className={`${'input' + (focused ? ' -focused' : '')} w-full lg:w-32 m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg`}
                      {...inputProps}
                    />
                  )}
          </DatePicker>
          <label htmlFor="enddate-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg">End Date:</label>
          <DatePicker date={endDate} onDateChange={setEndDate} locale={enUS} modifiers={endDateModifiers} modifiersClassNames={modifiersClassNames}>
          {({ inputProps, focused }) => (
                    <input
                      id="enddate-input" 
                      className={`${'input' + (focused ? ' -focused' : '')} w-full lg:w-32 m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg`}
                      {...inputProps}
                    />
                  )}
          </DatePicker>
          <input className="w-full lg:w-84 m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg"placeholder="Search Term (optional)" onChange={e => setSearchTerm(e.target.value)}/>
          <button className="w-full lg:w-20 m-2 p-6 bg-blue-800 hover:bg-blue-700 text-white rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg" onClick={ searchHandler }>Search</button>
          <button className="w-full lg:w-40 m-2 p-6 border border-blue-800 text-blue-800 hover:border-blue-700 hover:text-blue-700 rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg" onClick={ () => { setToggleCreate(!toggleCreate)} }>{ toggleCreate ? 'Hide Transaction' : 'Add Transaction' }</button>
      </div>
    { toggleCreate &&
        <AddTransactionForm setToggleCreate={setToggleCreate} spendingPlanPartLabels={spendingPlanPartLabels} />
    }
    </div>
    <TransactionsTableList allTransactions={allTransactions} />
    </div>
  )
}

export default Transactions
