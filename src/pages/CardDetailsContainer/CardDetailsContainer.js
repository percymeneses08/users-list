import React, { useState, useEffect } from 'react'

import UsersCards from '../../components/UsersCards/UsersCards'

import firebaseApp from '../../Config'

function CardDetailsContainer({ ...rest }) {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(_ => {
    fetchData()
  }, [])

  const fetchData = async _ => {
    try {
      const id = rest.computedMatch.params.cardId
      const db = firebaseApp.firestore()
      const collection = await db.collection("cards").doc(id).get()
      setData(collection.data())
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  if (loading && !data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    )
  }

  return (
    <div>
      <UsersCards cards={data} />
    </div>
  )
}

export default CardDetailsContainer