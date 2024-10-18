import React  from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import randomColor from 'randomcolor'
import { change_color } from '../Redux/Color'
function Aside() {
  const newColor=randomColor()
  const dispath=useDispatch()
  const changeColor=()=>{
    dispath(change_color({
      color:newColor
    }))
  }
 const color=useSelector(state=>state.color.value)
  return (
    <div>
      <h2  style={{color:color}}>change color</h2>
      <button onClick={changeColor}>change color</button>
    </div>
  )
}

export default Aside
