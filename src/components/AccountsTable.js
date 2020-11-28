import React from 'react'

function AccountsTable({accounts}){
  return (
    <div>
      <div>
        <div>NAME</div>
        <div>TYPE</div>
      </div>
      {
        accounts.map(account => {
          const {id, name, type} = account
          return (
            <div key={id}>
              <div key={`${id}-name`}>{name}</div>
              <div key={`${id}-type`}>{type}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AccountsTable
