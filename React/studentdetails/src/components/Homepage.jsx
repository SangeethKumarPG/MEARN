import AddressDetails from "./AddressDetails";
import Studentdetails from "./Studentdetails";
import StudentMarks from "./StudentMarks";

function Homepage() {
  return (
    <>
      <div>
        <h4>Welcome to homepage</h4>
      </div>
      <Studentdetails />
      <StudentMarks />
      <AddressDetails />
    </>
  );
}

export default Homepage;
