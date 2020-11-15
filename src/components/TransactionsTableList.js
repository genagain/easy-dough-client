import React from 'react';
import TransactionsTable from './TransactionsTable';

function TransactionsTableList({allTransactions}) {
  // TODO set max width on message and table
  if (allTransactions.length === 0) {
    return (
      <p className="m-auto w-10/12 p-6 text-5xl lg:text-lg lg:max-w-6xl">No transactions were found that matched the provided date range or search term</p>
    )
  }

  // TODO add headers for larger screens
  return (
    <div>
    { 
      allTransactions.map( monthsTransactions => {
        const { month, transactions } = monthsTransactions
        return (
          <div key={month} role="list" title={month} className="m-auto w-10/12 lg:max-w-6xl">
            <h1 className="px-1 pt-6 pb-3 text-6xl lg:text-2xl">{month}</h1>
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
