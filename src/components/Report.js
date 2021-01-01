import React from 'react';
import ReportRow from './ReportRow'

function Report({ historicalSpending, months }) {
  return (
    <div>
      <label htmlFor="month-input">Month:</label>
      <select id="month-input">
        {
          months.map(month => {
            return (
              <option key={month} value={month}>{month}</option>
            )
          })
        }
      </select>
      <button>Generate</button>
      {
        historicalSpending.map(row => {
          const { label, actualAmount, expectedAmount, difference } = row
          return (
            <ReportRow key={label} label={label} actualAmount={actualAmount} expectedAmount={expectedAmount} difference={difference} />
          )
        })
      }
    </div>
  )
}

export default Report
