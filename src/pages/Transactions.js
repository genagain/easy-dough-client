import React, { useContext, useState, useEffect } from 'react'
import TransactionsTableList from '../components/TransactionsTableList'
import UserContext from '../UserContext'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Transactions() {

  const { accessToken, logout } = useContext(UserContext)

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

  function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit'}
    const [month, day, year] = date.toLocaleDateString('en-US', options).split('/')
    return [year, month, day].join('-')
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

    setQueryParams(params)
  }

  return (
    <>
    <h1>Transactions</h1>
    <label>Start Date:</label>
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    <label>End Date:</label>
    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
    <button onClick={ searchHandler }>Search</button>
    <TransactionsTableList allTransactions={allTransactions} />
    </>
  )
}

export default Transactions
