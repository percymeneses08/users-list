import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column w-100 vh-100 justify-content-center">
        <h1 className="text-center">Welcome to Users List!</h1>
        <Link className="text-center" to="/login">Login</Link>
        <Link className="text-center align-middel" to="/signup/">Sign up</Link>
      </div>
    )
  }
}

export default Home