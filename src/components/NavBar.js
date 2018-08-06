import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <Link to='/form'>Form</Link> | <Link to='/login'>Login</Link> | <Link to='/index'>Index</Link>
    </div>
    )
}

export default NavBar


