import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from "./components/TaskCard"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@mui/material/Button";
import addIcon from './assets/add-icon.svg'

function App() {
    return (
    <>
      <div className="container m-5 p-5 d-flex align-items-center justify-content-center">
        <TaskCard/>
        
      </div>
      <Button variant="contained" className="add-button"><img src={addIcon} /></Button>
    </>
  )
}

export default App
