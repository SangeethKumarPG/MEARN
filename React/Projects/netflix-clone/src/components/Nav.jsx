import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <div className='nav_container'>
        <img src="images/icon.png" alt=""/>

        <nav>
          <ul>
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>

          </ul>
        </nav>
    </div>
  )
}

export default Nav