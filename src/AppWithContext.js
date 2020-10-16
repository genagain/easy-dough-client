import React, {useState} from 'react'
import Cookies from 'js-cookie'

import UserContext from './UserContext'
import App from './App'
import {formatDate} from './utils'

function AppWithContext() {

  const storedAccessToken = Cookies.get('access_token')
  const [accessToken, setAccessToken] = useState(storedAccessToken)

  const [initialStartDate, initialEndDate] = initialDates()
  const [endDate, setEndDate] = useState(initialEndDate)
  const [startDate, setStartDate] = useState(initialStartDate)

  const [queryParams, setQueryParams] = useState({ start_date: formatDate(startDate), end_date: formatDate(endDate)})

  function initialDates() {
    const endDate = new Date(Date.now())
    const startYear = endDate.getFullYear()
    const startMonth = endDate.getMonth() - 2
    const startDate = new Date(startYear, startMonth)
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
    <UserContext.Provider value={{ accessToken, login, logout, queryParams, setQueryParams }}>
      <App />
    </UserContext.Provider>
  )
}

export default AppWithContext;
