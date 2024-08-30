import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
//Api call or asynchronous function call using Thunk
export const fetchRestaurant = createAsyncThunk('restaurantSlice/fetchRestaurant', ()=>{
    const result = axios.get('./restaurant.json').then(response=>response.data);
    console.log("Response from thunk");
    console.log(result);
    return result;
})

const restarantSlice = createSlice({
    name:"restaurantSlice",
    initialState : {
        loading: false, //pending state means, api call in progress
        allRestaurants : [], //resolve state
        error:"" //rejected state
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending, state=>{
            state.loading = true;
        }),
        builder.addCase(fetchRestaurant.fulfilled, (state, action)=>{
            state.loading = false;
            state.allRestaurants = action.payload;
            state.error = ""; 
        }),
        builder.addCase(fetchRestaurant.rejected,(state, action)=>{
            state.loading = false;
            state.allRestaurants = [],
            state.error = action.error.message;
        })
    }

})

export default restarantSlice.reducer;