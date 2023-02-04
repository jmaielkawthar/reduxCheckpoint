import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from "../redux/action";

const AddNewTask = () => {
    const [text, setText] = useState("please enter your")
    const dispatch = useDispatch() ;
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newOne={
            id:Math.random(), action : text, isDone:false
        }
        dispatch(handleAdd(newOne))
        setText("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={text}  placeholder="your todos ?" onChange={e=>setText(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddNewTask