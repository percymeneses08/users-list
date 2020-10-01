import React from 'react'

function UsersCards({ cards }) {
  return (
    <div>
      <h2>Name</h2>
      <h3>{cards.firstName} {cards.lastName}</h3>
      <h2>Portfolio</h2>
      <h3>{cards.portfolio}</h3>
      <h2>Email</h2>
      <h3>{cards.email}</h3>
    </div>
  )
}

export default UsersCards