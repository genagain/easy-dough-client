import React, {useState} from 'react'
import Cookies from 'js-cookie'

import UserContext from './UserContext'
import App from './App'
import { convertDateToIso } from './utils'

function AppWithContext() {

  const storedAccessToken = Cookies.get('access_token')
  const [accessToken, setAccessToken] = useState(storedAccessToken)

  const [initialStartDate, initialEndDate] = initialDates()

  const [queryParams, setQueryParams] = useState({ start_date: convertDateToIso(initialStartDate), end_date: convertDateToIso(initialEndDate)})
  const [refetch, setRefetch] = useState(false)

  function initialDates() {
    const endDate = new Date(Date.now())
    const startYear = endDate.getFullYear()
    let startMonth
    if (endDate.getMonth() <= 1) {
      startMonth = '01'
    } else if (endDate.getMonth() <= 9) {
      startMonth = `0${endDate.getMonth() - 1}`
    } else {
      startMonth = endDate.getMonth() - 1
    }
    const startDate = new Date(`${startYear}-${startMonth}-01`)
    return [startDate, endDate]
  }

  function login(token) {
    Cookies.set('access_token', token)
    setAccessToken(token)
  }

  function logout() {
    Cookies.remove('access_token')
    setAccessToken(undefined)
  }

  return (
    <UserContext.Provider value={{ accessToken, login, logout, queryParams, setQueryParams, refetch, setRefetch }}>
      <App />
    </UserContext.Provider>
  )
}

export default AppWithContext;
