import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import UsersCards from '../../components/UsersCards/UsersCards'

import firebaseApp from '../../Config'

function UsersList({ history }) {

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
      {
        data.map(item => {
          return (
            <div key={item.id}>
              <Link to={`/users_list/${item.id}`}>
                <UsersCards
                  cards={item}
                />
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default UsersList