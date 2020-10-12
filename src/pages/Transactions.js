import React, { useContext, useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import TransactionsTableList from '../components/TransactionsTableList'
import AddTransactionForm from '../components/AddTransactionForm'
import UserContext from '../UserContext'
import { formatDate } from '../utils'

import "react-datepicker/dist/react-datepicker.css";

function Transactions() {

  const { accessToken, logout } = useContext(UserContext)

  const [toggleCreate, setToggleCreate] = useState(false)

  const [initialStartDate, initialEndDate] = initialDates()
  const [endDate, setEndDate] = useState(initialEndDate)
  const [startDate, setStartDate] = useState(initialStartDate)

  const [searchTerm, setSearchTerm] = useState()

  const [queryParams, setQueryParams] = useState({ start_date: formatDate(startDate), end_date: formatDate(endDate)})

  const [allTransactions, setAllTransactions] = useState([])

  function initialDates() {
    const endDate = new Date(Date.now())
    const startYear = endDate.getFullYear()
    const startMonth = endDate.getMonth() - 2
    const startDate = new Date(startYear, startMonth)
    return [startDate, endDate]
  }

  useEffect(() => {
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
      start_date: formatDate(startDate),
      end_date: formatDate(endDate)
    }

    // TODO Handle search term validation
    if (searchTerm) {
      params['search_term'] = searchTerm
    }

    setQueryParams(params)
  }

  // Consider creating a separate search form component
  return (
    <>
    <h1>Transactions</h1>
    <label htmlFor="startdate-input">Start Date:</label>
    <DatePicker id="startdate-input" selected={startDate} onChange={date => setStartDate(date)} />
    <label htmlFor="enddate-input">End Date:</label>
    <DatePicker id="enddate-input" selected={endDate} onChange={date => setEndDate(date)} />
    <input placeholder="Search Term (optional)" onChange={e => setSearchTerm(e.target.value)}/>
    <button onClick={ searchHandler }>Search</button>
    <button onClick={ () => { setToggleCreate(!toggleCreate)} }>{ toggleCreate ? 'Hide Transaction' : 'Add Transaction' }</button>
    { toggleCreate ?
      (
        <AddTransactionForm setToggleCreate={setToggleCreate} />
      ) : 
        null
    }
    <TransactionsTableList allTransactions={allTransactions} />
    </>
  )
}

export default Transactions
