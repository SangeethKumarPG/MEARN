import React, { Component } from 'react'

export default class Address extends Component {

  render() {
    const {pincode} = this.props;
    return (
      <div>
        <h3 style={{color:"magenta", fontFamily:"cursive"}}>Address Details</h3>
        <h4 style={{color:"orange"}}>House:123</h4>
        <h4>Locality : Near me</h4>
        <h4>Pincode : {pincode} </h4>
      </div>
    )
  }
}
