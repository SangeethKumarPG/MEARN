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
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
            <li><i class="fa-regular fa-bell"></i></li>
          </ul>
        </nav>
       
          <img src='images/profileicon.jpg' alt="" style={{width:"2rem", height:"2rem", marginTop:"2rem", marginLeft:"1rem"}}/>
        
        
        
    </div>
  )
}

export default Nav