import React from 'react';

function TransactionsTable({transactions}) {
  // TODO consider creating a transactions row component
  // TODO consider testing order of rendered transactions
  return (
        <div>
            {
              transactions.map( transaction => {
                const { id, date, description, amount } = transaction
                return (
                  <div key={`${description}-${amount}-${date}`}>
                    <div key={`${date}-${description}-${amount}`}>{date}</div>
                    <div key={`${description}-${date}`}>{description}</div>
                    <div key={`${amount}-${date}`}>{amount}</div>
                    <button data-testid={`delete-${id}`}>Delete</button>
                  </div>
                )
              })
            }
          </div>
  )
}

export default TransactionsTable
