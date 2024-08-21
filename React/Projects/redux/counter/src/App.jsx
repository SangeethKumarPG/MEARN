import './App.css'
import Counter from './Components/Counter'

function App() {
  

  return (
    <>
      <div className='d-flex align-items-center justify-content-center w-100 flex-column'
      style={{height:"100vh"}}>
        <div className="d-flex align-items-center justify-content-center flex-column p-5 rounded"
        style={{backgroundColor:"#E2E2B6"}}>
            <h2 style={{color:"#03346E"}}>Counter Application</h2>
            <Counter/>
        </div>
        
      </div>
      
    </>
  )
}

export default App
