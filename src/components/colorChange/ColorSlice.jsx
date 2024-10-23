import { createSlice } from "@reduxjs/toolkit";
export const colorSlice=createSlice({
    name:'color',
    initialState:{
        color:[]
    },
    reducers:{
        addColor:(state,action)=>{
            state.color.push(action.payload)
        },
        deleteColor:(state,action)=>{
            state.color=state.color.filter((_,index)=>index!==action.payload)
        },
        editColor:(state,action)=>{
            const {id,data}=action.payload
            state.color[id]=data
        }
        
        
    }
})
export const {addColor,deleteColor,editColor}=colorSlice.actions
export default colorSlice.reducer