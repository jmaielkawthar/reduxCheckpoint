import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const TaskList = () => {
  const [filter, setFilter] = useState(false);
  const {todos} =useSelector(state=>state)
  const handelFilter =()=>setFilter(!filter);
  return (
    <div>
      <button handelFilter={handelFilter} filter={filter} > filter </button>
      {
      React.Children.toArray(todos.map(el=> <TaskCard handelFilter={handelFilter} filter={filter}  task={el}/>))
      }
    
    </div>
  )
}

export default TaskList