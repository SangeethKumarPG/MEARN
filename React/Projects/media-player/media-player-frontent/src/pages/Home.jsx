import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

function Home() {
  return (
    <div>

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-between">
        <div className="add_video">
          <Add/>
        </div>
        <Link to="/watch" style={{textDecoration:"none", color:"black", fontSize:"1.5rem"}}>
          Watch History
        </Link>
      </div>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
          <div className="all-videos">
            <h4>
              All Videos
            </h4>
            <View/>
          </div>
          <div className="category">
            <Category/>
          </div>
      </div>
    </div>
  )
}

export default Home