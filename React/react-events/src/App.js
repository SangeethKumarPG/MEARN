import logo from "./logo.svg";
import "./App.css";
import Topic from "./components/Topic";
import User from "./components/User";
import MySubject from "./components/MySubject";
import UserDetails from "./components/UserDetails";
import Random from "./components/Random";

function App() {
  const age = 34;
  const show = () => {
    alert("button clicked!!!");
  };
  const showName = (name) => {
    alert(name);
  };
  return (
    <div>
      <h2>React Events</h2>
      function with no arguments
      <button
        type="button"
        style={{
          color: "white",
          backgroundColor: "black",
          padding: "20px",
          margin: "20px",
          borderRadius: "4px",
        }}
        onClick={show}
      >
        Submit
      </button>
      <br />
      function with arguments
      <button
        type="button"
        style={{
          color: "white",
          backgroundColor: "blue",
          padding: "20px",
          margin: "20px",
          borderRadius: "4px",
        }}
        onClick={() => {
          showName("Some Name");
        }}
      >
        Submit New
      </button>

      <Topic/>
      <User/>
      <MySubject subjectName="react" userAge={age}/>
      <UserDetails/>
      <Random/>
    </div>
  );
}

export default App;
