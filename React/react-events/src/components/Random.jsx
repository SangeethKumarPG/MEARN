import React, { Component } from "react";

export default class Random extends Component {
  constructor() {
    super();
    this.state = { carName: "Polo" };
  }
  changeValue = (car) => {
    this.setState({ carName: car });
  };
  render() {
    return (
      <>
        <div>Random</div>
        <h3>
          Car name :{" "}
          <span style={{ color: "green" }}>{this.state.carName}</span>
        </h3>
        <button
          type="button"
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "20px",
            margin: "10px",
            borderRadius: "4px",
          }}
          onClick={() => this.changeValue("i20")}
        >
          Change Car
        </button>
      </>
    );
  }
}
