import React from 'react'
import { Link } from 'react-router-dom'

// function Home() {
//   return (
//     <h1>Hello World!</h1>
//   )
// }

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Users List!</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup/">Sign up</Link>
      </div>
    )
  }
}

export default Home