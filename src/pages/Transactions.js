import React, { useContext, useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import TransactionsTableList from '../components/TransactionsTableList'
import AddTransactionForm from '../components/AddTransactionForm'
import UserContext from '../UserContext'
import { convertDateToIso, convertIsoToDate } from '../utils'

import "react-datepicker/dist/react-datepicker.css";

function Transactions() {

  const { accessToken, logout, queryParams, setQueryParams } = useContext(UserContext)

  const [toggleCreate, setToggleCreate] = useState(false)

  // TODO put today in utils
  const today = new Date(Date.now())
  const initialEndDate = convertIsoToDate(queryParams.end_date)
  const initialStartDate = convertIsoToDate(queryParams.start_date)
  const [endDate, setEndDate] = useState(initialEndDate)
  const [startDate, setStartDate] = useState(initialStartDate)

  const [searchTerm, setSearchTerm] = useState()


  const [allTransactions, setAllTransactions] = useState([])

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

  // Consider creating a separate search form component
  return (
    <div className="flex flex-col">
    <h1 className="text-4xl m-auto">Transactions</h1>
    <div className="flex flex-row">
      <div className="m-auto">
        <label htmlFor="startdate-input">Start Date:</label>
        <DatePicker id="startdate-input" selected={startDate} maxDate={today} onChange={date => setStartDate(date)} />
        <label htmlFor="enddate-input">End Date:</label>
        <DatePicker id="enddate-input" selected={endDate} maxDate={today} onChange={date => setEndDate(date)} />
        <input placeholder="Search Term (optional)" onChange={e => setSearchTerm(e.target.value)}/>
        <button onClick={ searchHandler }>Search</button>
        <button onClick={ () => { setToggleCreate(!toggleCreate)} }>{ toggleCreate ? 'Hide Transaction' : 'Add Transaction' }</button>
      </div>
    </div>
        { toggleCreate &&
            <AddTransactionForm setToggleCreate={setToggleCreate} />
        }
    <TransactionsTableList allTransactions={allTransactions} />
    </div>
  )
}

export default Transactions
