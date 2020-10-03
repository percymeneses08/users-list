import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader/Loader'
import UsersCards from '../../components/UsersCards/UsersCards'

import firebaseApp from '../../Config'

function UsersList({ history, currentUserEmail }) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState('')
  const [error, setError] = useState(null)

  useEffect(_ => {
    fetchData()
  }, [])

  const fetchData = async _ => {
    try {
      const db = firebaseApp.firestore()
      const orderedData = []
      const allCards = await db.collection("cards").get()

      allCards.forEach(doc => {
        orderedData.push(doc.data())
      })

      setData(orderedData)
      setLoading(false)
    } catch (err) {
      setError(err)
      setLoading(false)
    }
  }

  const signOut = event => {
    // event.preventDefault()

    firebaseApp.auth().signOut()
    history.push('/login')
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
    <div className="usersList d-flex flex-column mx-auto">
      <button className="btn btn-danger align-self-end mt-4 mb-4 mr-4" onClick={signOut}>Sign Out</button>
      <div className="d-flex justify-content-between flex-wrap">
        {
          data.map(item => {
            return (
              <div className="mr-2 mb-4 userCardInformation" key={item.id}>
                <Link to={`/users_list/${item.id}`} className="text-decoration-none">
                  <UsersCards
                    cards={item}
                  />
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default UsersList