import React, {useState} from 'react'
import { useDispatch } from "react-redux"
import { changeColorFunc } from '../features/Color'


function ChangeColor() {

    const [color, setColor] = useState('')
    const dispatch = useDispatch()

  return (
    <div>
        <input
         type="text" 
         placeholder='Enter Color' 
         onChange={(e) => setColor(e.target.value)}
         
         />
        <button onClick={() => dispatch(changeColorFunc( color )) } > Change Color </button>
    </div>
  )
}

export default ChangeColor