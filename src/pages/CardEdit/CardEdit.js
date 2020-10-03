import React, { useState, useEffect } from 'react'

import Form from '../../components/Form/Form'
import Loader from '../../components/Loader/Loader'

import FirebaseApp from '../../Config'

function CardEdit({ ...rest }) {

  const [data, setData] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(_ => {
    fetchData()
  }, [])

  const fetchData = async _ => {
    try {
      const id = rest.computedMatch.params.cardId
      const db = FirebaseApp.firestore()
      const collection = await db.collection('cards').doc(id).get()

      setData(collection.data())
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  const handleChange = event => {
    const { name, value } = event.currentTarget

    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleClick = _ => {
    console.log('click')
  }

  const handleSubmit = async event => {
    event.preventDefault()

    setLoading(true)
    setError(null)

    try {
      const id = rest.computedMatch.params.cardId
      const db = FirebaseApp.firestore()
      await db.collection("cards").doc(id).update(data)

      setLoading(false)
      rest.history.push('/users_list')
    } catch (err) {
      setError(err)
    }
  }

  if (loading && !data) {
    return (
      <Loader />
    )
  }

  if (error) {
    return (
      <div>
        <h1>error</h1>
      </div>
    )
  }

  return (
    <Form
      userData={data}
      handleClick={handleClick}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  )
}

export default CardEdit