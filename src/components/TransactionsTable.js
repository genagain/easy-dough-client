import React from 'react';
import TransactionRow from './TransactionRow'

function TransactionsTable({transactions}) {
  return (
        <div>
          <div className="border-b-2 border-gray-600 lg:border-b">
          <div>Date</div>
          <div>Description</div>
          <div>Amount</div>
          </div>
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
