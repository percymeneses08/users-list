import React from 'react'

function Form({ userData, handleChange, handleClick, handleSubmit }) {
  return (
    <div className="vh-100 d-flex flex-column align-items-center">
      <h2 className="mt-5" >Information</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="firstName"
            placeholder="Pepe"
            value={userData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="lastName"
            placeholder="Carlos"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Portfolio</label>
          <input
            className="form-control"
            type="text"
            id="lastName"
            name="portfolio"
            placeholder="https://name.com"
            value={userData.portfolio}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-success" onClick={handleClick} >Save</button>
      </form>
    </div>
  )
}

export default Form