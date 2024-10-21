import { createSlice} from "@reduxjs/toolkit";
const initialState={
    todo:[]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo:(state,action)=>{
           state.todo.push(action.payload)
        },
        removetodo:(state,action)=>{
            console.log("remove function");
            console.log(action.payload);
            
            state.todo=state.todo.filter((_,index)=>index!==action.payload)
        },edittodo:(state,action)=>{
            const {index,newValue}=action.payload
            console.log(index)
            console.log(newValue);
            
            state.todo[index]=newValue
        }
    }
})
export const {addtodo,removetodo,edittodo}=todoSlice.actions
export default todoSlice.reducer