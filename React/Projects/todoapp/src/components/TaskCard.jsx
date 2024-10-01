import React from 'react'
import './TaskCard.css'
import trashIcon from '../assets/trash-icon.svg'

function TaskCard() {
  const cardClicked = () => {console.log("Card Clicked");}

  return (
    <>
      <div className="container border border-light rounded-2 m-2 p-2 white-shadow d-flex justify-content-evenly align-items-center adjust-width" onClick={cardClicked}> 
            
            <input type="checkbox" className="form-check-input" id="checkId"/> {" "}
            <label htmlFor="checkId" className="form-check-label">Task Name </label>
        <button className="btn btn-transparent">
        <img src={trashIcon} /></button>
        </div>

    </>
  )
}

export default TaskCard
