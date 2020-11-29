import React from 'react'
import AccountsTable from './AccountsTable'

function BanksList({allBanks}) {
  return (
    <div>
    {
      allBanks.map(bank => {
        const { name, logo, accounts } = bank
        return (
          <div key={name}>
            <h1 key={`${name}-name`}>{name}</h1>
            <img key={`${name}-logo`} src={`data:image/png;base64,${logo}`} alt={`${name}'s logo`} />
            <AccountsTable accounts={accounts} />
          </div>
        )
      })
    }
    </div>
  )
}

export default BanksList
