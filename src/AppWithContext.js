import React, {useState} from 'react'
import Cookies from 'js-cookie'

import UserContext from './UserContext'
import App from './App'

function AppWithContext() {

  const storedAccessToken = Cookies.get('access_token')
  const [accessToken, setAccessToken] = useState(storedAccessToken)

  function login(token) {
    Cookies.set('access_token', token)
    setAccessToken(token)
  }

  function logout() {
    Cookies.remove('access_token')
    setAccessToken(undefined)
  }

  return (
    <UserContext.Provider value={{ accessToken, login, logout }}>
      <App />
    </UserContext.Provider>
  )
}

export default AppWithContext;
