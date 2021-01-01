import React from 'react'

import Report from '../components/Report'

function Reports() {
  const historicalSpending = [
    {
      label: 'Debt',
      actualAmount: 910.8,
      expectedAmount: 910.8,
      difference: 0
    },
    {
      label: 'Cellphone',
      actualAmount: 40,
      expectedAmount: 40,
      difference: 0
    },
    {
      label: 'Groceries',
      actualAmount: 300,
      expectedAmount: 400,
      difference: 100
    },
    {
      label: 'Spending Money',
      actualAmount: 550,
      expectedAmount: 436.29,
      difference: 113.71
    }
  ]

  const months = [
    'January',
    'February',
    'March'
  ]
  return (
    <div className="m-auto w-10/12 lg:max-w-6xl">
      <Report historicalSpending={historicalSpending} months={months}/>
    </div>
  )
}

export default Reports;
