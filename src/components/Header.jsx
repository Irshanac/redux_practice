import React from 'react'
import { useSelector } from 'react-redux'
const Header=()=>{
    const color=useSelector(state=>state.color.value)
    const counter=useSelector(state=>state.count.counter)
    return(
        <div >
        <h1 style={{color}}>it ia header page count change to {counter} </h1>
        </div>
    )
}
export default Header