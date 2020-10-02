import React, { useState } from 'react'

import firebaseApp from '../../Config'

function Login({ history }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async event => {
    event.preventDefault()

    try {
      await firebaseApp.auth().signInWithEmailAndPassword(email, password)

      history.push('/users_list')
    } catch (error) {
      console.log(error.message)
      setError(error)
    }
  }

  return (
    <div className="vh-100 d-flex flex-column align-items-center">
      <h2 className="mt-5">Login</h2>
      <form action="d-flex flex-column">
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input className="form-control" type="email" required onChange={event => setEmail(event.currentTarget.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input className="form-control" type="password" required onChange={event => setPassword(event.currentTarget.value)} />
        </div>
        <button className="btn btn-primary" onClick={submit} >Login</button>
      </form>
    </div>
    // <h1>Hello</h1>
  )
}

export default Login