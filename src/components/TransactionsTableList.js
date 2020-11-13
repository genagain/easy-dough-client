import React from 'react';
import TransactionsTable from './TransactionsTable';

function TransactionsTableList({allTransactions}) {
  if (allTransactions.length === 0) {
    return (
      <p className="m-auto w-10/12 p-6 text-5xl">No transactions were found that matched the provided date range or search term</p>
    )
  }

  // TODO add headers for larger screens
  return (
    <div>
    { 
      allTransactions.map( monthsTransactions => {
        const { month, transactions } = monthsTransactions
        return (
          <div key={month} role="list" title={month} className="m-auto w-10/12 lg:w-7/12">
            <h1 className="px-1 pt-6 pb-3 text-6xl lg:text-3xl">{month}</h1>
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
