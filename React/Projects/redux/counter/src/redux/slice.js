import { createSlice } from "@reduxjs/toolkit";

// to initialize the file as slice we use a method createSlice.
const counterSlicer = createSlice({
    //name has no importance
    name:'counterApp',
    initialState:{
        value: 0
    },
    reducers:{
        // logic to update the value
        // actions are created inside the reducers 
        increment:(state)=>{
            state.value += 1
        },
        decrement:(state)=>{
            state.value -= 1
        },
        reset:(state)=>{
            state.value = 0
        }
    }
})