import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Header/>
      <h2 className="student_header">Student Details</h2>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
