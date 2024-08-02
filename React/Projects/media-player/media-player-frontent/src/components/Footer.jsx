import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='footer d-flex align-items-center justify-content-evenly'>
        <div style={{width:"25rem"}}>
          <h5>
          <i className="fa-solid fa-video text-warning me-3"></i> Media Player
          </h5>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nemo, recusandae accusantium aspernatur excepturi atque doloribus hic repellat. Dolorem nesciunt iure quaerat, pariatur minus sit laborum deleniti non repellat eum.</p>
        </div>
        <div className='d-flex flex-column ms-3'>
          <h4>Links</h4>
          <Link to="/" style={{textDecoration:"none", color:"black"}}>
            Landing Page
          </Link>
          <Link to="/home" style={{textDecoration:"none", color:"black"}}>Home</Link>
          <Link to="/watch" style={{textDecoration:"none", color:"black"}}>Watch History</Link>
        </div>
        <div>
          <h4>Guides</h4>
        </div>
        <div>
          <h4>Contact us</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer