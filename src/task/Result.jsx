import React, { useEffect } from 'react'
import { adds } from './taskSlice'
import { useDispatch,useSelector } from 'react-redux'
function Result() {
    const {total}=useSelector(state=>state.task)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(adds())
    },[])
  return (
    <div>
      <h2>{total}</h2>
    </div>
  )
}

export default Result
