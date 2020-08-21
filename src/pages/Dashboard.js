import React, {useContext} from 'react'
import UserContext from '../UserContext'

function Dashboard() {
  const { accessToken } = useContext(UserContext)

  return (
    <>
    <h1>dashboard</h1>
    <h6>{accessToken}</h6>
    </>
  )
}

export default Dashboard
