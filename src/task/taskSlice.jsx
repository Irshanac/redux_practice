import { createSlice } from "@reduxjs/toolkit";
export const taskSlice =createSlice({
    name:'task',
    initialState:{
        first:0,
        second:0,
        total:0
    },
    reducers:{
        adds:(state)=>{
            state.total=Number(state.first)+Number(state.second)
        },
        firsts:(state,action)=>{
            state.first=action.payload
        },
        seconds:(state,action)=>{
            state.second=action.payload
        }
    }
})
export const {adds,seconds,firsts}=taskSlice.actions
export default taskSlice.reducer