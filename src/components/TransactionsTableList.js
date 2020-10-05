import React from 'react';
import TransactionsTable from './TransactionsTable';

function TransactionsTableList({allTransactions}) {
  if (allTransactions.length === 0) {
    return (
      <p>No transactions were found that matched the provided date range or search term</p>
    )
  }

  return (
    <div>
    { 
      allTransactions.map( monthsTransactions => {
        const { month, transactions } = monthsTransactions
        return (
          <div key={month} role="list" title={month}>
            <h1>{month}</h1>
            <TransactionsTable transactions={transactions} />
          </div>
        )
      })
    }
    </div>
  )
}

export default TransactionsTableList
