import React, {useContext, useEffect, useState} from 'react'

import UserContext from '../UserContext'
import Report from '../components/Report'

function Reports() {
  const { accessToken, logout } = useContext(UserContext)
  const [months, setMonths] = useState([])
  const [historicalSpending, setHistoricalSpending] = useState([])
  const [reportParam, setReportParam] = useState()

  useEffect(() => {
    const fetchMonths = async () => {
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const response = await fetch(`${apiUrl}/reports/months`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }
      )

      const json = await response.json()

      if (!response.ok) {
        logout()
      }

      setMonths(['', ...json['months']])
    }

    fetchMonths()
  }, [accessToken, logout])

  useEffect(() => {
    const fetchHistoricalSpending = async () => {
      if (!reportParam) {
        return
      }
      const apiUrl = process.env.REACT_APP_SERVER_BASE_URL
      const response = await fetch(`${apiUrl}/reports/generate?month=${reportParam}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }
      )

      const json = await response.json()

      if (!response.ok) {
        logout()
      }

      setHistoricalSpending(json['historticalSpending'])
    }

    fetchHistoricalSpending()

  }, [reportParam, accessToken, logout])

  return (
    <div className="m-auto w-10/12 lg:max-w-6xl">
      <Report historicalSpending={historicalSpending} months={months} setReportParam={setReportParam}/>
    </div>
  )
}

export default Reports;
