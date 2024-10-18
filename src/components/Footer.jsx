import React from "react";
import { useSelector } from "react-redux";
const Footer=()=>{
    
    const color=useSelector(state=>state.color.value)
    return(
        <h1 style={{color}} >it is a footer</h1>
    )
}
export default Footer 