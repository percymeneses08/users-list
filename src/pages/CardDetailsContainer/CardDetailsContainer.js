import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import UsersCards from '../../components/UsersCards/UsersCards'
import Loader from '../../components/Loader/Loader'

import firebaseApp from '../../Config'
import './CardDetailsContainer.css'

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

  const handleDelete = async _ => {
    const id = rest.computedMatch.params.cardId
    const db = firebaseApp.firestore()
    await db.collection("cards").doc(id).delete()
    await firebaseApp.auth().currentUser.delete()
  }

  if (loading && !data) {
    return (
      <Loader />
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
    <div className="cardDetailsContainer mx-auto mt-5">
      <Link className="btn btn-warning mb-3" to="/users_list">Go back</Link>
      <UsersCards cards={data} />
      {
        rest.currentUserEmail == data.email ? (
          <div className="d-flex justify-content-center mt-3">
            <Link className="btn btn-success mr-3" to={`/users_list/${data.id}/edit`}>Edit information</Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete account</button>
          </div>
        ) : (
            // <Link className="btn btn-warning mt-3" to="/users_list">Go back</Link>
            <div></div>
          )
      }
    </div>
  )
}

export default CardDetailsContainer