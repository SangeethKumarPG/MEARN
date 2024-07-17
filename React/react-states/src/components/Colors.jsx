import React from 'react'
import { useState } from 'react'

function Colors() {
    const [colors, setColors] = useState({
        first:"red",
        second:"blue",
        third:"yellow",
        fourth : "green"
    })
  return (
    <div>
        <h2 style={{color:"red"}}>Colors</h2>
        <ul>
            <li style={{color:colors.first}}>{colors.first}</li>
            <li style={{color:colors.second}}>{colors.second}</li>
            <li style={{color:colors.third}}>{colors.third}</li>
            <li style={{color:colors.fourth}}>{colors.fourth}</li>
        </ul>
        <button type='button' 
        style={{color:"white", backgroundColor:"black", padding:"10px",borderRadius:"4px", margin:"10px"}}
        onClick={()=> setColors({...colors, second:"orange"})}>
            Change Color
        </button>
    </div>
  )
}

export default Colors