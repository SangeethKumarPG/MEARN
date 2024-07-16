import logo from './logo.svg';
import './App.css';

function App() {
  const show = ()=>{
    alert("button clicked!!!");
  }
  const showName = (name)=>{
    alert(name);
  }
  return (
    <div>
      <h2>React Events</h2>
      function with no arguments
      <button type="button" style={{color:"white", backgroundColor:"black",
        padding:"20px", margin:"20px", borderRadius:"4px"}}
        onClick={show}
        >Submit</button>
        <br />
        function with arguments
      <button type="button" style={{color:"white", backgroundColor:"blue",
        padding:"20px", margin:"20px", borderRadius:"4px"}}
        onClick={()=>{showName('Some Name')}}
        >Submit New</button>
    </div>
  );
}

export default App;
