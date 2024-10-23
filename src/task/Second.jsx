import React ,{useState}from 'react'
import {useDispatch} from'react-redux'
import { useNavigate } from 'react-router-dom'
import { seconds } from './taskSlice'
function Second() {
    const navigate=useNavigate()
    const [val,setVal]=useState(0)
    const dispatch=useDispatch()
    const passing=()=>{
        dispatch(seconds(val))
        navigate('/result')
    }
  return (
    <div>
      <label>second number</label>
      <input value={val} onChange={(e)=>setVal(e.target.value)}></input>
      <button onClick={passing}>move result</button>
    </div>
  )
}


export default Second
