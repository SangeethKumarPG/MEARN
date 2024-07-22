import React, { useState } from "react";

function Register() {
  const [userData, setUserData] = useState({
    uname: "",
    uemail: "",
    ugender: "",
    ucourse: "",
  });
  const getUserData = (e) => {
    const { name, value } = e.target;
    // console.log(name , value)
    // console.log(e.target.name, ":", e.target.value);
    setUserData({ ...userData, [name]: value });
  };
//   console.log(userData);

const handleRegister = (e) =>{
    e.preventDefault();
    console.log(userData);
}
  return (
    <div>
      <h3 style={{ color: "red" }}>User Registration Form</h3>
      <form action="" onSubmit={handleRegister}>
        <div>
          <label htmlFor="uname" style={{ fontSize: "20px" }}>
            name
          </label>
          <input
            type="text"
            id="uname"
            name="uname"
            placeholder="please enter the name"
            style={{
              padding: "10px",
              margin: "10px",
              width: "300px",
              borderRadius: "10px",
              borderColor: "blue",
            }}
            onChange={(e) => getUserData(e)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="emailid" style={{ fontSize: "20px" }}>
            email
          </label>
          <input
            type="email"
            id="emailid"
            name="uemail"
            placeholder="enter the email id"
            style={{
              padding: "10px",
              margin: "10px",
              width: "300px",
              borderRadius: "10px",
              borderColor: "blue",
            }}
            onChange={(e) => getUserData(e)}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="">gender:</label>
          <input
            type="radio"
            value="male"
            name="ugender"
            onChange={(e) => getUserData(e)}
          />
          <label htmlFor="">Male</label>
          <input
            type="radio"
            name="ugender"
            value="female"
            onChange={(e) => getUserData(e)}
          />
          <label htmlFor="">Female</label>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="">Course:</label>
          <select
            name="ucourse"
            id=""
            style={{
              padding: "10px",
              margin: "10px",
              width: "300px",
              borderRadius: "10px",
              borderColor: "blue",
            }}
            onChange={(e) => getUserData(e)}
          >
            <option disabled hidden selected>
              choose from the list
            </option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="Mech">Mech</option>
            <option value="Civil">Civil</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value={"Register"}
            style={{
              padding: "10px",
              backgroundColor: "blue",
              margin: "10px",
              color: "white",
              borderRadius: "8%",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
