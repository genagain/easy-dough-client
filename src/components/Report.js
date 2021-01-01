import React from 'react';
import ReportRow from './ReportRow'

function Report({ historicalSpending }) {
  return (
    <div>
      {
        historicalSpending.map(row => {
          const { label, actualAmount, expectedAmount, difference } = row
          return (
            <ReportRow label={label} actualAmount={actualAmount} expectedAmount={expectedAmount} difference={difference} />
          )
        })
      }
    </div>
  )
}

export default Report
