import React from 'react'
import { useSelector } from 'react-redux'
const Header=()=>{
    const color=useSelector(state=>state.color.value)
    return(
        <div >
        <h1 style={{color}}>it ia header page</h1>
     
        </div>
    )
}
export default Header