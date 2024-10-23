import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {fetchData,deleteData} from './DataSlice'
import { useNavigate } from 'react-router-dom'
function ShowData() {
    const navigate=useNavigate()
    const {product,status,error}=useSelector(state=>state.data)
    const dispatch=useDispatch()
    useEffect(()=>{
            dispatch(fetchData())   
    },[dispatch])
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
        <button onClick={()=>navigate('/adddata')}>Add product</button>
      {product.map((item) => (
        <li key={item.id}>
            <div style={{display:'flex' ,gap:'5px'}}>
                <span>{item.name}</span>
                <span>{item.price}</span>
                <button onClick={()=>navigate(`/editdata/${item.id}`)}>edit</button>
                <button onClick={()=>dispatch(deleteData(item.id))}>delete</button>
            </div>
        </li>
      ))}
    </div>
  )
}

export default ShowData
