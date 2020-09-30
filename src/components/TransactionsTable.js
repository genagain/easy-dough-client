import React from 'react';

function TransactionsTable({allTransactions}) {
  if (allTransactions.length === 0) {
    return (
      <p>Looks like we don't have any transactions to show yet</p>
    )
  }
  // TODO create a transactions row component
/*                const { date, description, amount } = transaction*/
                //return (
                  //<div key={`${description}-${amount}-${date}`}>
                    //<div key={`${date}-${description}-${amount}`}>{date}</div>
                    //<div key={`${description}-${date}`}>{description}</div>
                    //<div key={`${amount}-${date}`}>{amount}</div>
                  //</div>
 
  // Ideally not use a nested map
  return (
    <div>
    { 
      allTransactions.map( monthsTransactions => {
        const { month, transactions } = monthsTransactions
        return (
          <div key={month}>
            <h1>{month}</h1>
          </div>
        )
      })
    }
    </div>
  )
}

export default TransactionsTable
