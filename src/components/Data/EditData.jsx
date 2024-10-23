import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'
import { editData } from './DataSlice'
function EditDataPage() {
    const dispatch=useDispatch()
    const {product,status,error}=useSelector(state=>state.data)
    const {id}=useParams()
    const findElement=product.find((item)=>item.id===id)
    const [name,setname]=useState(findElement.name)
    const [price,setPrice]=useState(findElement.price)
    const navigate=useNavigate()
    const saveData=()=>{
        console.log(id);
        console.log(name)
        console.log(price)
        dispatch(editData({id,name,price}))
        navigate('/')
    }
    if(status==='loading')
        {
            return <div>Loading</div>
        }
        if(status==='failed')
        {
            return <div>error {error}</div>
        }
  return (
    <div>
      <label>name</label>
      <input value={name} onChange={(e)=>setname(e.target.value)}></input><br/>
      <label htmlFor="price">price</label>
      <input value={price} onChange={(e)=>setPrice(e.target.value)}></input>
      <button onClick={saveData}>save</button>
    </div>
  )
}

export default EditDataPage
