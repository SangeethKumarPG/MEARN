import './App.css';
import Address from './components/Address';
import Dashboard from './components/Dashboard';
import EducationalDetails from './components/EducationalDetails';

function App() {
  const companyHO = "Mumbai";
  return (
    <div>
     <h3>User Details</h3>
     <Dashboard companyName="TCS" companyHO={companyHO}/>
     <EducationalDetails/>
     <Address pincode="679578"/>
    </div>
  );
}

export default App;
