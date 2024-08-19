import React from "react";

function UserDetails() {
  const userData = [
    { name: "John", age: 32, position: "Project Manager" },
    { name: "Todd", age: 29, position: "Project Lead" },
    { name: "Sean", age: 22, position: "Senior Developer" },
    { name: "Kenneth", age: 24, position: "Tester" },
  ];
  return (
    <>
      <div style={{ color: "orange" }}>UserDetails</div>
      <table
        style={{
          tableLayout: "fixed",
          width: "100%",
          border: "3px solid purple",
        }}
      >
        <thead>
          <tr>
            <th>SL No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserDetails;
