import React, { useState } from 'react'

function SearchBar({setCity}) {

    const inputCity = (e) =>{
        setCity(e.target.value);
        
    }
  return (
    <>
        <div className='container-fluid mt-5 d-flex align-items-center justify-content-center'>
            
                        <form className='form'>
                            <input type='text' className="form-control" onChange={(e)=>inputCity(e)} placeholder='Nearest City'/>
                        </form>

            

        </div>

    </>
    
  )
}

export default SearchBar