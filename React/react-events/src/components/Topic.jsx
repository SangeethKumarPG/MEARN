import React from "react";

function Topic() {
  const getTopic = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h4>Topic</h4>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter the topic"
          style={{
            padding: "20px",
            margin: "20px",
            width: "300px",
            borderRadius: "10px",
          }}
          onChange={(e) => {
            getTopic(e);
          }}
        />
      </div>
    </div>
  );
}

export default Topic;
