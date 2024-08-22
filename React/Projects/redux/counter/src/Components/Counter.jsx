import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/slice";

function Counter() {
  // Component can access the state by useSelector hook
  const counterValue = useSelector((state) => state.counter.value);
  // console.log(counterValue);

  const [range, setRange] = useState(1);

  //useDispatch() is a hook used to call a method in action to update the state
  const dispatch = useDispatch();

  const resetInput = ()=>{
    dispatch(reset());
    rangeInput.value = "";
    setRange(1);
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center w-100 flex-column">
        <h1 className="display-1" style={{ color: "#03346E" }}>
          {counterValue}
        </h1>
        <div className="mt-3">
          <button
            className="btn btn-warning p-2 "
            onClick={() => dispatch(increment(Number(range)))}
          >
            INCREMENT
          </button>
          <button
            className="btn btn-success p-2 ms-3"
            onClick={() => dispatch(decrement(Number(range)))}
          >
            DECREMENT
          </button>
          <button
            className="btn btn-danger p-2 ms-3"
            onClick={() => resetInput()}
          >
            RESET
          </button>
        </div>
      </div>
      <div>
        <input type="text" name="rangeInput" id="rangeInput" className="form-control mt-3 rounded" style={{borderColor:"#6EACDA"}}
        onChange={(e)=>setRange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Counter;
