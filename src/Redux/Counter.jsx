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
            if(state.counter===0)
                state.counter=0
            else
            state.counter-=1
         }
    }

})
export const {increasing,decreasing}=countSlice.actions
export default countSlice.reducer