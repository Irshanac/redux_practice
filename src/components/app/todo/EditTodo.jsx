import React, { useState } from "react";
import { useSelector } from "react-redux";

const EditTodo=({index})=>{
    const todo=useSelector(state=>state.todo.todo)
    const select =todo.find(index)
    const [newText,setNewText]=useState(select)
    

    return(
        <div>
            <h1>Edit the page</h1>
            <input type="text" value={newText} onChange={(e)=>setNewText(e.target.value)}></input>
            <button>save</button>
        </div>
    )
}
export default EditTodo