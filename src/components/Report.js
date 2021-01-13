import React, { useState } from 'react';
import ReportRow from './ReportRow'

function Report({ historicalSpending, months, setReportParam }) {
  const [selectedMonth, setSelectedMonth] = useState()

  return (
    <div>
      <label htmlFor="month-input" className="my-2 text-5xl lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" >Month:</label>
      <select id="month-input" className="w-full min-w-1/12 lg:w-auto m-2 p-6 text-5xl border border-gray-400 rounded lg:max-w-sm lg:my-4 lg:p-2 lg:text-lg" onChange={e => setSelectedMonth(e.target.value)}>
        {
          months.map(month => {
            return (
              <option key={month} value={month}>{month}</option>
            )
          })
        }
      </select>
      <button className="w-full lg:w-auto m-2 p-6 bg-blue-800 hover:bg-blue-700 text-white rounded-lg lg:my-2 lg:p-2 text-5xl lg:text-lg" onClick={() => {
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
