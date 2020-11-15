import React from 'react';
import TransactionRow from './TransactionRow'

function TransactionsTable({transactions}) {
  return (
        <div>
          <div className="border-b-2 border-gray-600 lg:border-none">
            <div className="flex flex-row invisible lg:visible lg:bg-blue-800 lg:rounded">
              <div className="m-2 lg:text-lg lg:w-40 lg:text-white">Date</div>
              <div className="m-2 lg:text-lg lg:w-84 lg:text-white">Description</div>
              <div className="m-2 lg:text-lg lg:w-96 lg:text-white">Amount</div>
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
