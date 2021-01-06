import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../Auth'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // console.log(props)
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
            <Redirect to={'/login'} />
          )
      }
    />
  )
}

export default PrivateRoute