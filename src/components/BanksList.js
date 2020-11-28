import React from 'react'

function BanksList({allBanks}) {
  return (
    <div>
    {
      allBanks.map(bank => {
        const {name} = bank
        return (
          <h1 key={`name-${name}`}>{name}</h1>
        )
      })
    }
    </div>
  )
}

export default BanksList
