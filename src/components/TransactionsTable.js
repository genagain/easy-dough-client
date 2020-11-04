import React from 'react';
import TransactionRow from './TransactionRow'

function TransactionsTable({transactions}) {
  return (
        <div>
            {
              transactions.map( transaction => (
                <div key={transaction.id}>
                  <TransactionRow transaction={transaction}/>
                </div>
                )
              )
            }
          </div>
  )
}

export default TransactionsTable
