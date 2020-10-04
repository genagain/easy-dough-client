import React from 'react';
import TransactionsTable from './TransactionsTable';

function TransactionsTableList({allTransactions}) {
  if (allTransactions.length === 0) {
    return (
      <p>Looks like we don't have any transactions to show yet</p>
    )
  }
  console.log('TransactionsTableList')
  console.log(allTransactions)
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
