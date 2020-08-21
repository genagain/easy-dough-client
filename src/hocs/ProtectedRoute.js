import React, {useContext} from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../UserContext'

function ProtectedRoute({ component: Component, ...rest }) {
  const { accessToken } = useContext(UserContext) 
  return (
    <Route {...rest} render={
      props => {
        return accessToken ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    } />
  )
}

export default ProtectedRoute;
