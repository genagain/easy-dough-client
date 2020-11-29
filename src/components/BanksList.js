import React from 'react'
import AccountsTable from './AccountsTable'

function BanksList({allBanks}) {
  return (
    <div>
    {
      allBanks.map(bank => {
        const { name, logo, accounts } = bank
        return (
          <div key={name} className="py-6">
            <div className="flex flex-row items-center space-x-6">
              <img key={`${name}-logo`} className="h-20 w-20 lg:h-8 lg:w-8" src={`data:image/png;base64,${logo}`} alt={`${name}'s logo`} />
              <h1 key={`${name}-name`} className="text-5xl lg:text-2xl">{name}</h1>
            </div>
            <AccountsTable accounts={accounts} />
          </div>
        )
      })
    }
    </div>
  )
}

export default BanksList
