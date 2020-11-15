import React from 'react';
import TransactionRow from './TransactionRow'

function TransactionsTable({transactions}) {
  return (
        <div>
          <div className="border-b-2 border-gray-600 lg:border-b">
            <div className="flex flex-row invisible lg:visible">
              <div className="m-2 lg:text-lg lg:w-40">Date</div>
              <div className="m-2 lg:text-lg lg:w-84">Description</div>
              <div className="m-2 lg:text-lg lg:w-96">Amount</div>
            </div>
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
