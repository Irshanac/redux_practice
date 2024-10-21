import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from './todoalice'
const AddTodo=()=>{
    const dispatch=useDispatch()
    const[texts,setText]=useState('')
    const addtodolist=()=>{
        //e.priventDefault()
        dispatch(addtodo(texts))
        setText('')
    }
    return(
        <>
        <h3>Add Todo</h3>
        <input type='text' value={texts} onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={addtodolist}>Add</button>
        </>
    )
}
export default AddTodo