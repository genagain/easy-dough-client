import React from 'react';

function TransactionsTable({transactions}) {
  // TODO create a transactions row component
  return (
        <>
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
          </>
  )
}

export default TransactionsTable
