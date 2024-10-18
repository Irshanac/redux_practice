import React from 'react'
import Counter from './Counter'
import Aside from './Aside'
const Home=()=>{
    return(
        <>
         <h1>it is a home page</h1>
        <div style={{display:'flex',gap:'10px'}}>
        <Counter   />
        <Aside/>
        </div>
        </> 
       

    )
}
export default Home