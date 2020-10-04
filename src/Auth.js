import React, { useEffect, useState } from 'react'
import firebaseApp from './Config'

export const AuthContext = React.createContext()

// export function AuthProvider({ children }) {
export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(_ => {
    firebaseApp.auth().onAuthStateChanged(setCurrentUser)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// export default authContext
// export default AuthProvider