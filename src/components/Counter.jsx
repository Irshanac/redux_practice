import React  from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increasing,decreasing} from '../Redux/Counter'
const Counter=()=>{
    const dispatch=useDispatch()
   const color=useSelector(state=>state.color.value)
    const counter=useSelector(state=>state.count.counter)
    return(
        <div style={{display:'flex' ,flexDirection:'column'}}>
            <p style={{color}}>{counter}</p>
            <div style={{gap:'5px'}}>
                <button onClick={()=>dispatch(increasing())}>increment</button>
                <button onClick={()=>dispatch(decreasing())} >Decrement</button>
            </div>
        </div>
    )
}
export default Counter