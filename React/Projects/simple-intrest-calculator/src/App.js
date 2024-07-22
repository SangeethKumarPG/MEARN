import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [interest, setInterest] = useState(0);

  //state to store weather input fields values are valid
  const[isPrincipleValid, setIsPrincipleValid] = useState(true);
  const[isRateValid, setIsRateValid] = useState(true);
  const[isYearValid, setIsYearValid] = useState(true);
  
  const validate = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;
    if(!!value.match(/^[1-9][0-9]*\.?[0-9]*$/)){
      if (name === "principle") {
        setPrinciple(value);
        setIsPrincipleValid(true);
      } else if (name === "rate") {
        setRate(value);
        setIsRateValid(true)
      } else if (name === "years") {
        setYear(value);
        setIsYearValid(true)
      }
    }else{
      if (name === "principle") {
        setPrinciple(value);
        setIsPrincipleValid(false);
      } else if (name === "rate") {
        setRate(value);
        setIsRateValid(false)
      } else if (name === "years") {
        setYear(value);
        setIsYearValid(false)
      }
    }

  };
  const handleReset = () => {
    setInterest(0);
    setRate(0);
    setPrinciple(0);
    setYear(0);
    setIsPrincipleValid(true);
    setIsRateValid(true);
    setIsYearValid(true);
  };
  const handleCalculate = (e) => {
    e.preventDefault();
    // console.log(principle);
    // console.log(year);
    // console.log(rate);
    const result = (principle * year * rate) / 100;
    setInterest(result);
  };
  return (
    <div
      style={{ backgroundColor: "black", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{ backgroundColor: "white", width: "30rem" }}
        className="p-5 rounded"
      >
        <h2>Simple interest application</h2>
        <p className="block-quote">Calculate your simple interest easily</p>
        <div
          style={{ height: "10rem", backgroundColor: "orange" }}
          className="p-3 mt-3 rounded shadow d-flex  flex-column justify-content-center align-items-center"
        >
          <h2 className="fw-bold">&#x20B9; {interest}</h2>
          <p> Total Simple Interest</p>
        </div>
        <form action="" onSubmit={(e) => handleCalculate(e)}>
          <div className="mt-3">
            <TextField
              id="outlined-basic"
              label="Principle Amount"
              variant="outlined"
              className="w-100"
              name="principle"
              // type="number"
              onChange={(e) => validate(e)}
              value={principle || ""}
            />
            {
              !isPrincipleValid &&
              <p className="text-danger block-quote fw-bold">Invalid input</p>
            }
          </div>

          <div className="mt-3">
            <TextField
              id="outlined-basic"
              label="Rate of Interest in %"
              variant="outlined"
              className="w-100"
              name="rate"
              // type="number"
              onChange={(e) => validate(e)}
              value={rate || ""}
            />
            {
              !isRateValid &&
              <p className="text-danger block-quote fw-bold">Invalid input</p>
            }
          </div>
          <div className="mt-3">
            <TextField
              id="outlined-basic"
              label="Total Years"
              variant="outlined"
              className="w-100"
              name="years"
              // type="number"
              onChange={(e) => validate(e)}
              value={year || ""}
            />
            {
              !isYearValid &&
              <p className="text-danger block-quote fw-bold">Invalid input</p>
            }
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Button
              variant="contained"
              color="success"
              style={{ width: "10rem", padding: "1rem" }}
              type="submit"
              disabled={isPrincipleValid && isRateValid && isYearValid ? false : true}
            >
              Calculate
            </Button>
            <Button
              variant="outlined"
              style={{ width: "10rem", padding: "1rem" }}
              onClick={handleReset}
              
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
