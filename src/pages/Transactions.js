import React, { useContext, useState, useEffect } from 'react'
import TransactionsTableList from '../components/TransactionsTableList'
import UserContext from '../UserContext'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Transactions() {

  const { accessToken, logout } = useContext(UserContext)

  const today = new Date(Date.now())
  const [endDate, setEndDate] = useState(today)
  const [startDate, setStartDate] = useState(deduceDate(today, true))

  const [allTransactions, setAllTransactions] = useState([])

  // TODO consider creating an options object
  function deduceDate(date, isStart = false) {
    if (isStart) {
      date.setMonth(date.getMonth() - 2)
    }

    const options = { year: 'numeric', month: '2-digit', day: '2-digit'}
    const [month, day, year] = date.toLocaleDateString('en-US', options).split('/')
    
    const intlDate = isStart ? [year, month, '01'] : [year, month, day]
    return intlDate.join('-')
  }

  useEffect(() => {
    const fetchTransactions = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      
      const today = new Date(Date.now())
      const end_date = deduceDate(today)
      const start_date = deduceDate(today, true)

      const params = new URLSearchParams({
        start_date: start_date,
        end_date: end_date,
      })

      const response = await fetch(`${apiUrl}/transactions?${params}`,
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
  }, [accessToken, logout])

  return (
    <>
    <h1>Transactions</h1>
    <label>End Date:</label>
    <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
    <TransactionsTableList allTransactions={allTransactions} />
    </>
  )
}

export default Transactions
