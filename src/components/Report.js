import React, { useState } from 'react';
import ReportRow from './ReportRow'

function Report({ historicalSpending, months, setReportParam }) {
  const [selectedMonth, setSelectedMonth] = useState()

  return (
    <div>
      <label htmlFor="month-input">Month:</label>
      <select id="month-input" onChange={e => setSelectedMonth(e.target.value)}>
        {
          months.map(month => {
            return (
              <option key={month} value={month}>{month}</option>
            )
          })
        }
      </select>
      <button onClick={() => {
        setReportParam(selectedMonth)
      }
      }>Generate</button>
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
