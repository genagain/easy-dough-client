import React from 'react'

function AccountsTable({accounts}){
  return (
    <div className="border-gray-600 border rounded-lg lg:rounded lg:shadow">
      <div className="flex flex-row bg-blue-800">
        <div className="m-2 text-3xl w-1/2 lg:text-sm text-white">NAME</div>
        <div className="m-2 text-3xl w-1/2 lg:text-sm text-white">TYPE</div>
      </div>
      {
        accounts.map(account => {
          const {id, name, type} = account
          return (
              <div key={`${id}-${name}-${type}`} className="flex flex-row lg:items-baseline border-gray-600 border-t-2 lg:border-t">
                <div key={`${id}-name`} className="m-2 text-3xl w-1/2 lg:m-2 lg:text-base">{name}</div>
                <div key={`${id}-type`} className="m-2 text-3xl w-1/2 lg:m-2 lg:text-base">{type}</div>
              </div>
          )
        })
      }
    </div>
  )
}

export default AccountsTable
