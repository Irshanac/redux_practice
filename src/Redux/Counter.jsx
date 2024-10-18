import { createSlice } from "@reduxjs/toolkit";
export const countSlice =createSlice({
    name:"counter",
    initialState:{
        counter:7
    },reducers:{
         increasing:(state,action)=>{
            state.counter=state.counter+1
         },
         decreasing:(state,action)=>{
            state.counter-=1
         }
    }

})
export const {increasing,decreasing}=countSlice.actions
export default countSlice.reducer