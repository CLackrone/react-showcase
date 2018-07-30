import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <p>This is a placeholder for the NavBar</p>
      <Link to='/form'>Form</Link> <p> | </p>
      <Link to='/login'>Login</Link><p> | </p>
      <Link to='/index'>Index</Link>
    </div>
    )
}

export default NavBar


//<Link className="navbar-brand" to="/">Toy Library</Link>