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
                <div className="d-flex flex-column">
                    <h4>Guides</h4>
                    <Link to={"https://react.dev"} target='_blank' style={{textDecoration:"none", color:"white"}}>React</Link>
                    <Link to={"https://react.dev"} target='_blank' style={{textDecoration:"none", color:"white"}}>React Bootstrap</Link>
                    <Link to={"https://react.dev"} target='_blank' style={{textDecoration:"none", color:"white"}}>Bootswatch</Link>
                </div>
                <div>
                    <h4>Contact</h4>
                    <div className="d-flex">
                        <input type="text" name="" id="" className='form-control' placeholder='Enter Email Id'/>
                        <button type='button' className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className="d-flex justify-content-evenly mt-3">
                        <Link style={{textDecoration:"none", color:"white"}}><i className="fa-brands fa-instagram fa-2x"></i></Link>
                        <Link style={{textDecoration:"none", color:"white"}}><i className="fa-brands fa-x-twitter fa-2x"></i></Link>
                        <Link style={{textDecoration:"none", color:"white"}}><i className="fa-brands fa-facebook fa-2x"></i></Link>
                        <Link style={{textDecoration:"none", color:"white"}}><i className="fa-brands fa-whatsapp fa-2x"></i></Link>
                    </div>
                </div>
            </div>
            <p style={{color:"white",fontSize:"0.75rem"}}>©Copyright E-Kart 2024 built with react-redux</p>
        </div>
    </>
  )
}

export default Footer