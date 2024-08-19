import React from 'react'
import loadingImage from '../loading.png'
import './LoadingPage.css'

function LoadingPage() {
  return (
    <div className='loading-container'>
        <img src={loadingImage} alt="Loading Image" className='loading-image' />
    </div>
  )
}

export default LoadingPage