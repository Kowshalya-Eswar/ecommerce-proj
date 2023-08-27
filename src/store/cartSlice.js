import { createSlice } from "@reduxjs/toolkit";

const initialState =[];
const cartSlice = createSlice({
 name:'cart',
 initialState,
 reducers:{
    add(state,action){
       state.push(action.payload)
    },
    remove(state,action){
      return state.filter(item=>item.id !== action.payload)
    }
}}
);

const productData = createSlice({
   name:'productData',
   initialState,
   reducers:{
      productInitiate(state,action){
         state.push(action.payload)
      },
      productFilter(state,action){
         return state.filter((product)=>((product.title).toLowerCase()).includes(action.payload.toLowerCase()))
      }
   }
});

export const {add,remove,productInitiate,productFilter} = cartSlice.actions;
export default cartSlice.reducer;