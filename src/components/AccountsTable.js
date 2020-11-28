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
          const {id, name} = account
          return (
            <div key={`${id}-name`}>{name}</div>
          )
        })
      }
    </div>
  )
}

export default AccountsTable
