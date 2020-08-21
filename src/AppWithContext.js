import React, {useState} from 'react'

import UserContext from './UserContext'
import App from './App'

function AppWithContext() {

  //TODO read accessToken from cookie
  const [accessToken, setAccessToken] = useState()

  function login(token) {
  //TODO set accessToken cookie
    setAccessToken(token)
  }

  function logout() {
  //TODO unset accessToken cookie
    setAccessToken(undefined)
  }

  return (
    <UserContext.Provider value={{ accessToken, login, logout }}>
      <App />
    </UserContext.Provider>
  )
}

export default AppWithContext;
