import React from 'react'

function UsersCards({ cards }) {
  return (
    <div className="card card-body text-dark">
      <h2 className="card-title text-dark">{cards.firstName} {cards.lastName}</h2>
      <h4 className="text-dark">{cards.portfolio}</h4>
      <h5 className="text-dark">{cards.email}</h5>
    </div>
  )
}

export default UsersCards