import React ,{useState}from 'react'
import {useDispatch} from'react-redux'
import { useNavigate } from 'react-router-dom'
import { firsts } from './taskSlice'
function First() {
    const navigate=useNavigate()
    const [val,setValue]=useState(0)
    const dispatch=useDispatch()
    const passing=()=>{
        dispatch(firsts(val))
        navigate('/second')
    }
  return (
    <div>
      <label>first number</label>
     {/* // <input value={val} onChange={(e)=>setValue(e.target.value)}></input> */}
     <input value={val} onChange={(e)=>setValue(e.target.value)}></input>
      <button onClick={passing}>move page 2</button>
    </div>
  )
}

export default First
