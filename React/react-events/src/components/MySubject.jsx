import React from "react";

function MySubject({subjectName, userAge}) {
  return (
    <>
      <div style={{ color: "red" }}>MySubject</div>
      {
        subjectName === "react" &&
        <h3>Subject is <span>{subjectName}</span></h3>
      }
      <div>
        {
            userAge < 18? 
            <h3>User is Minor</h3>
            :
            <h3>User is Major</h3>
        }
      </div>
    </>
  );
}

export default MySubject;
