import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div style={{width:"100%", height:"300px", color:"white"}} className='d-flex align-items-center justify-content-center flex-column mt-5 bg-primary'>

            <div className="d-flex justify-content-evenly align-items-center mb-5 w-100">
                <div style={{width:"400px"}}>
                    <h4>
                    <Link to={"/"} style={{textDecoration:"none", color:"white"}}><i className="fa-solid fa-cart-shopping fa-bounce"></i>E-Kart</Link>
            
                    </h4>
                    <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis autem ipsa earum, labore possimus nisi ducimus modi tenetur laborum quisquam? Officiis omnis tempora vel. Quidem aspernatur voluptatem laboriosam nisi facere.</h6>
                </div>
                <div className="d-flex flex-column">
                    <h4>Links</h4>
                    <Link to={"/"} style={{textDecoration:"none", color:"white"}}>Home</Link>
                    <Link to={"/cart"} style={{textDecoration:"none", color:"white"}}>Cart</Link>
                    <Link to={"/wishlist"} style={{textDecoration:"none", color:"white"}}>Wishlist</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer