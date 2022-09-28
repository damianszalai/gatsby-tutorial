import React from 'react'
import {Link} from 'gatsby'
import {FiAlignJustify} from 'react-icons/fi'
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><FiAlignJustify></FiAlignJustify></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/tags">Tags</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
        </ul>
        </nav>
  )
}

export default Navbar
 