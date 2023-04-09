import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <nav className='navbar'>
        <Link style={{textDecoration:'none', color:"grey"}} to='/'>Home</Link>
        <Link style={{textDecoration:'none', color:"grey"}} to='/buisness'>Buisness</Link>
        <Link style={{textDecoration:'none', color:"grey"}} to='/entertainment'>Entertainment</Link>
        <Link style={{textDecoration:'none', color:"grey"}} to='/science'>Science</Link>
        <Link style={{textDecoration:'none', color:"grey"}} to='/tech'>Tech</Link>
    </nav>
  )
}

export default Navbar