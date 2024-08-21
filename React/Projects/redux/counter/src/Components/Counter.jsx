import React from 'react'

function Counter() {
  return (
    <div>
        <div className='d-flex align-items-center justify-content-center w-100 flex-column'>
            <h1 className='display-1' style={{color:"#03346E"}}>100</h1>
            <div className='mt-3'>
                <button className='btn btn-warning p-2 '>INCREMENT</button>
                <button className='btn btn-success p-2 ms-3'>DECREMENT</button>
                <button className='btn btn-danger p-2 ms-3'>RESET</button>
            </div>
        </div>  
    </div>
  )
}

export default Counter