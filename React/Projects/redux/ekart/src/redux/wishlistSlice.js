import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        //actions are provided inside reducers (logic to update the state)
        addToWishList:(state, action)=>{
            state.push(action.payload)
        },
        // action to remove item from wishlist
        removeItem:(state, action)=>{
            return state.filter(item => item.id != action.payload)
        }
    }

})

export const {addToWishList, removeItem} = wishlistSlice.actions;
export default wishlistSlice.reducer;