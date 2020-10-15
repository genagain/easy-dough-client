import React from 'react'

function TransactionRow({transaction}) {
  const { id, date, description, amount } = transaction

  return (
    <div key={id}>
      <div key={`${id}-${date}`}>{date}</div>
      <div key={`${id}-${description}`}>{description}</div>
      <div key={`${id}-${amount}`}>{amount}</div>
      <button data-testid={`delete-${id}`}>Delete</button>
    </div>

  )
}

export default TransactionRow
