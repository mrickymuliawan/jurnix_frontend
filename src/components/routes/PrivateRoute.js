import React from 'react'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = localStorage.getItem('token')

  return (
    <Route {...rest} render={(props) => (
      isAuthenticated
        ?
        children
        : <Redirect to={{
          pathname: '/login'
        }} />
    )} />
  )
}

export default PrivateRoute
