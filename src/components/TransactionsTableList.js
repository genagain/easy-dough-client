import React from 'react';
import TransactionsTable from './TransactionsTable';

function TransactionsTableList({allTransactions}) {
  if (allTransactions.length === 0) {
    return (
      <p>No transactions were found that matched the provided date range or search term</p>
    )
  }

  // TODO add headers
  return (
    <div>
    { 
      allTransactions.map( monthsTransactions => {
        const { month, transactions } = monthsTransactions
        return (
          <div key={month} role="list" title={month} className="m-auto w-10/12">
            <h1 className="text-6xl">{month}</h1>
            <div key={`transactions-table-${month}`}>
              <TransactionsTable transactions={transactions} />
            </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default TransactionsTableList
