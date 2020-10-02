import React from 'react';

function TransactionsTable({transactions}) {
  // TODO create a transactions row component
  // Ideally not use a nested map
  return (
        <div>
            {
              transactions.map( transaction => {
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
