import React from 'react'
import AccountsTable from './AccountsTable'

function BanksList({allBanks}) {
  if (allBanks.length === 0) {
    return (
      <p className="m-auto w-10/12 p-6 text-5xl lg:text-lg lg:max-w-6xl">Looks like you haven't added any banks yet. Please add a bank.</p>
    )
  }

  return (
    <div>
    {
      allBanks.map(bank => {
        const { name, logo, accounts } = bank
        return (
          <div key={name} className="py-6 lg:py-3">
            <div key={name} className="pb-6 lg:pb-3">
              <div className="flex flex-row items-center space-x-6 lg:space-x-3">
                <img key={`${name}-logo`} className="h-20 w-20 lg:h-8 lg:w-8" src={`data:image/png;base64,${logo}`} alt={`${name}'s logo`} />
                <h1 key={`${name}-name`} className="text-5xl lg:text-2xl">{name}</h1>
              </div>
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
