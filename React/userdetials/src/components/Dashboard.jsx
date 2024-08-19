import React from 'react'
import './Dashboard.css'
import Styles from '../myStyle.module.css'
function Dashboard(props) {
    console.log("=========Value from App component==========");
    console.log(props);
    const firstName = "Varun";
    const location = "Malappuram";
    const email = "test@email.com";
    const mobile = "9876543210";
    const qualification = "B.Tech";
  return (
    <div>
        <h4 className='company_heading'>Company Name : <span>{props.companyName}</span></h4>
        <h4>Company Head Office : <span>{props.companyHO}</span></h4>
        <h4 className={Styles.username}>Name : <span className='userdetails_items'>{firstName}</span></h4>
        <h4>Location : <span className='userdetails_items'>{location}</span></h4>
        <h4>Email : <span className='userdetails_items'>{email}</span></h4>
        <h4>Mobile : <span className='userdetails_items'>{mobile}</span></h4>
        <h4>Qualification : <span className='userdetails_items'>{qualification}</span></h4>
    </div>
  )
}

export default Dashboard