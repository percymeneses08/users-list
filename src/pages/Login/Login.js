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
    <div>
      <h2>Login</h2>
      <form action="">
        <label htmlFor="">Email</label>
        <input type="email" onChange={event => setEmail(event.currentTarget.value)} />
        <label htmlFor="">Password</label>
        <input type="password" onChange={event => setPassword(event.currentTarget.value)} />
        <button onClick={submit} >Login</button>
      </form>
    </div>
    // <h1>Hello</h1>
  )
}

export default Login