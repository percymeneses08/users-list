import React, { useState } from 'react'
import { withRouter } from 'react-router'

import firebaseApp from '../../Config'



function Signup({ history }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    portfolio: "",
    email: ""
  })
  const [error, setError] = useState('')
  const [loader, setLoader] = useState(true)

  const handleSubmit = async event => {
    event.preventDefault()

    try {

      await firebaseApp.auth().createUserWithEmailAndPassword(email, password)

      const db = firebaseApp.firestore()
      const collection = db.collection("cards")
      const save = await collection.add(form)
      const id = save.id
      await collection.doc(id).update({ id: id })

      // history.push('/UsersList')
      history.push('/users_list')
      setLoader(false)
    } catch (error) {
      console.log(error)
      setError(error)
      setLoader(false)
    }
  }
  const handleClick = event => {
    console.log('Sign up clicked')
  }
  const handleChange = event => {
    const { name, value } = event.currentTarget

    if (name === 'email') {
      setEmail(value)
    }
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name</label>
        <input type="text" id="name" name="firstName" onChange={handleChange} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="name" name="lastName" onChange={handleChange} />

        <label htmlFor="">Portfolio</label>
        <input type="text" id="lastName" name="portfolio" onChange={handleChange} />

        <label htmlFor="">Email</label>
        <input type="email" name="email" onChange={handleChange} />

        <label htmlFor="">Password</label>
        <input type="password" onChange={event => setPassword(event.currentTarget.value)} />

        <button onClick={handleClick} >Sign up</button>
      </form>
    </div>
  )
}

export default Signup