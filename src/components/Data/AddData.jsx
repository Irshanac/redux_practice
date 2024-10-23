import React, { useEffect, useState } from 'react'
import { addData } from './DataSlice'
import { useSelector ,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
function AddData() {
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const dispatch=useDispatch()
    const {status}=useSelector(state=>state.data.status)
    if(status==='loading')
        {
            return <div>Loading</div>
        }
        if(status==='failed')
        {
            return <div>error {error}</div>
        }
    const handleSave=()=>{
        dispatch(addData({id:nanoid(),name:name,price:price}))
        setName('')
        setPrice(0)
        navigate('/')
        
    }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
      <label htmlFor="price">price</label>
      <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}></input>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default AddData
