import React from 'react';

function TransactionsTable({transactions}) {
  if (transactions.length === 0) {
    return (
      <p>Looks like we don't have any transactions to show yet</p>
    )
  }

  return (
    <div>
      {
        transactions.map(transaction => {
          const { date, description, amount } = transaction
          return (
            <div key={`${description}-${amount}-${date}`}>
              <div key={`${date}-${description}-${amount}`}>{date}</div>
              <div key={`${description}-${date}`}>{description}</div>
              <div key={`${amount}-${date}`}>{amount}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TransactionsTable
