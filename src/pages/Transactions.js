import React, { useContext, useState, useEffect } from 'react'
import TransactionsTableList from '../components/TransactionsTableList'
import UserContext from '../UserContext'

function Transactions() {

  const { accessToken } = useContext(UserContext)
  const [allTransactions, setAllTransactions] = useState([])


  useEffect(() => {
    const fetchTransactions = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const params = new URLSearchParams({
        start_date: '2020-08-22',
        end_date: '2020-09-12',
      })

      const response = await fetch(`${apiUrl}/transactions?${params}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        })

      const transactions = await response.json()
      setAllTransactions(transactions)
    }

    fetchTransactions()

  }, [])

  return (
    <>
    <h1>Transactions</h1>
    <TransactionsTableList allTransactions={allTransactions} />
    </>
  )
}

export default Transactions
