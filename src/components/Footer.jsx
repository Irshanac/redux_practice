import React from "react";
import { useSelector } from "react-redux";
const Footer=()=>{
    const counter =useSelector(state=>state.count.counter)
    const color=useSelector(state=>state.color.value)
    return(
        <h1 style={{color}} >it is a footer {counter}</h1>
    )
}
export default Footer 