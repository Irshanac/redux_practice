import { createSlice } from "@reduxjs/toolkit";
export const cakeBuy=createSlice({
    initialState:{
        cakeCount:0
    },
    name:"cakeshop",
    reducers:{
        increasing:(state,action)=>{
            state.cakeCount+=1
        },
        decresing:(state,action)=>{
            state.cakeCount-=1
        }
    }

})
export const {increasing,decresing}=cakeBuy.actions
export default cakeBuy.reducer