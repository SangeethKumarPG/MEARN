import { useState } from 'react';
import './App.css';
import Colors from './components/Colors';

function App() {
  //syntax to create state.
  const [languageName, setLanguageName] = useState("JAVA");
  return (
    <div>
      <h3>useState() hook example</h3>
      <hr />
      <h4>Programming language : <span style={{color:"orange"}}>{languageName}</span></h4>
      <button
          type="button"
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "20px",
            margin: "10px",
            borderRadius: "4px",
          }}
          onClick={()=>setLanguageName("C++")}
        >
          Change Subject Name
        </button>
        <Colors/>
    </div>
  );
}

export default App;
