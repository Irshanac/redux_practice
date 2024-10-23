import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addColor } from './ColorSlice'
import { useNavigate } from 'react-router-dom'
function AddColor() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [color,setColr]=useState("")
    const colorSave=()=>{
        dispatch(addColor({title,color,body}))
        navigate('/')
    }
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}></input><br/>
      <label htmlFor="color">color</label>
      <input type='color' value={color} onChange={(e)=>setColr(e.target.value)}></input><br/>
      <label htmlFor="body">body</label>
      <input type='text' value={body} onChange={(e)=>setBody(e.target.value)}></input><br/>
      <button onClick={colorSave}>save</button>
    </div>
  )
}

export default AddColor
