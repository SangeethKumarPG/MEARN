import React from 'react'
import { Link } from 'react-router-dom'
import gitIcon from '../assets/github-original.svg'
import linkIcon from '../assets/link-icon.svg'

function MyProject() {
  return (
    <>
        <div className='shadow p-5 mb-5'>
            <div className='d-flex mt-2'>
                <h5 className='text-warning me-auto'>My Projects</h5>
                {/* add project component */}
            </div>
            <div className='p-3 mt-2 rounded-2 d-flex bg-secondary'>
                <h5 className='text-dark'>Media Player</h5>
                <div className='d-flex ms-auto align-items-center text-dark'>
                <p className='me-3'>Edit</p>
                <Link className='me-3'><img src={gitIcon} alt=""/></Link>
                <Link><img src={linkIcon}/></Link>
            </div>
            </div>
            
        </div>
    
    </>
  )
}

export default MyProject