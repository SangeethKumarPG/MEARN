import React from 'react'

function CityDisplay({city}) {
  return (
    <div>
        <div className="container-fluid text-center mt-5">
            <h3 className='display-4' style={{color:"#F7EEDD"}}>{city}</h3>
        </div>
    </div>
  )
}

export default CityDisplay