import React from 'react'

function BanksList({allBanks}) {
  return (
    <div>
    {
      allBanks.map(bank => {
        const { name, logo } = bank
        return (
          <div key={name}>
            <h1 key={`${name}-name`}>{name}</h1>
            <img key={`${name}-logo`} src={`data:image/png;base64,${logo}`} alt={`${name}'s logo`} />
          </div>
        )
      })
    }
    </div>
  )
}

export default BanksList
