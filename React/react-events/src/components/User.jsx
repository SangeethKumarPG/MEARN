import React from "react";

function User() {
  const getUserName = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h4>User Name</h4>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter the user name"
        style={{
          padding: "20px",
          margin: "20px",
          width: "300px",
          borderRadius: "10px",
        }}
        onChange={(e) => getUserName(e)}
      />
    </div>
  );
}

export default User;
