import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { edittodo, removetodo } from './todoalice'
function ShowTodo() {
    const [editindex,setEditIndex]=useState(null)
    const todo=useSelector(state=>state.todo.todo)
    const dispatch=useDispatch()
    const[newValue,setNewText]=useState('')
    const editTodos=(index)=>{
      console.log(index)
      console.log(newValue);
      
      dispatch(edittodo({index,newValue}))
      setEditIndex(null)
    }
    const startEditIndex=(index)=>{
      setEditIndex(index)
      setNewText(todo[index])
    }

  return (
    <div>
      {editindex!==null?(<div>
        <input type="text"  value={newValue}onChange={(e)=>setNewText(e.target.value)} />
        <button onClick={()=>editTodos(editindex)}>save</button>
        {/* <button>clear</button> */}
      </div>):(
        <div>
        {todo.length===0?(<h1>listis empty</h1>):(
          <div>
          <h1>Todo List</h1>
      {todo.map((todo,index)=>(
        <div key={index}>
          <p>{todo}</p>
          <button onClick={()=>dispatch(removetodo(index))} >delete</button>
          <button onClick={()=>startEditIndex(index)} >Edit</button>
        </div>
          
      ))}
      </div>)}
        </div>
      )}
      
  
      
    </div>
  )
}

export default ShowTodo
