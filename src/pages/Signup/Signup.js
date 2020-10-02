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
    <div className="vh-100 d-flex flex-column align-items-center">
      <h2 className="mt-5" >Sign up</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <input className="form-control" type="text" id="name" name="firstName" placeholder="Pepe" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input className="form-control" type="text" id="name" name="lastName" placeholder="Carlos" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="">Portfolio</label>
          <input className="form-control" type="text" id="lastName" name="portfolio" placeholder="https://name.com" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input className="form-control" type="email" name="email" placeholder="name@example.com" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input className="form-control" type="password" required onChange={event => setPassword(event.currentTarget.value)} />
        </div>

        <button className="btn btn-primary" onClick={handleClick} >Sign up</button>
      </form>
    </div>
  )
}

export default Signup