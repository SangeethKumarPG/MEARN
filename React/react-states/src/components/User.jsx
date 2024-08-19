import React, { useState } from "react";

function User() {
  const [user, setUser] = useState("");
  console.log(user);
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`user name is : ${user}`)
  }
  return (
    <div>
      <h3 style={{ color: "orange" }}>User Form</h3>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          placeholder="please enter the username"
          style={{ padding: "10px", margin: "20px", width: "400px" }}
          id="username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="submit"
          value={"submit"}
          style={{
            padding: "10px",
            backgroundColor: "blue",
            margin: "10px",
            color: "white",
            borderRadius: "8%",
          }}
        />
      </form>
    </div>
  );
}

export default User;
