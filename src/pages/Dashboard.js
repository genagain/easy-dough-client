import React, {useContext} from 'react'
import UserContext from '../UserContext'

function Dashboard() {
  const { accessToken } = useContext(UserContext)

  return (
    <>
    <h1>dashboard</h1>
    <p>{accessToken}</p>
    </>
  )
}

export default Dashboard
