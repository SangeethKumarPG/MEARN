import React from "react";
class EducationalDetails extends React.Component {
  divStyle = {
    backgroundColor : 'grey',
    textAlign:'center',
    margin:'40px',
    padding: '10px'
  };
  render() {
    return (
      <>
        <div style={this.divStyle}>
          <h3>Educational Details</h3>
          <h4>Qualification : Bsc. Computer Science</h4>
          <h4>Passout Year:2020</h4>
          <h4>Mark Percentage: 75%</h4>
        </div>
      </>
    );
  }
}

export default EducationalDetails;
