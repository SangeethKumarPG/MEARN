import React from 'react'
import searchIcon from '../assets/search-icon.svg'
import ProjectCard from '../components/ProjectCard'


function Project() {
  return (
    <>
      <div className="container-fluid">
        <h3 className='text-center mt-5'>All Projects</h3>
      </div>
      <div className="row my-4">
        <div className="col-md-4">

        </div>
        <div className="col-md-4 d-flex">
            <input type="text" placeholder='Search by Technology' className='form-control'/>
            <img src={searchIcon} className='ms-3'/>
        </div>
        <div className="col-md-4">

        </div>
      </div>
      <div className="container-fluid">
      <div className="row my-3">
        <div className="col-md-4">
          <ProjectCard isInProjectPage={true}/>
        </div>
        <div className="col-md-4">
          <ProjectCard isInProjectPage={true}/>
        </div>
        <div className="col-md-4">
          <ProjectCard isInProjectPage={true}/>
        </div>
      </div>
      </div>

    </>
  )
}

export default Project