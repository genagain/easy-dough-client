import React from 'react';
import TransactionRow from './TransactionRow'

function TransactionsTable({transactions}) {
  return (
        <div className="lg:border-gray-600 lg:border lg:rounded lg:shadow">
          <div className="border-b-2 border-gray-600 lg:border-none">
            <div className="flex flex-row invisible lg:visible lg:bg-blue-800">
              <div className="m-2 lg:text-base lg:w-40 lg:text-white">Date</div>
              <div className="m-2 lg:text-base lg:w-84 lg:text-white">Description</div>
              <div className="m-2 lg:text-base lg:w-96 lg:text-white">Amount</div>
            </div>
          </div>
            {
              transactions.map( transaction => (
                <div key={transaction.id} className="border-b-2 border-gray-600 lg:border-none">
                  <TransactionRow transaction={transaction}/>
                </div>
                )
              )
            }
          </div>
  )
}

export default TransactionsTable
