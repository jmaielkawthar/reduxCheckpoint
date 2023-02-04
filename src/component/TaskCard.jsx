
import { useDispatch } from 'react-redux';
import { handleComplete, handleDelete } from '../redux/action';
import EditTask from './EditTask';

const TaskCard = ({task, handleFilter, filter}) => {
  const dispatch = useDispatch() ;
  return (
    <div>
      <h1>
        {task.action}
      </h1>
      <p>
        {task.isDone}
      </p>
      <hr />
      <button onClick={()=> dispatch(handleDelete(task.id))}>delete</button>
      <button onClick={()=> dispatch(handleComplete(task.id))}>complete</button>
      
      <EditTask task={task}/>
    </div>
  )
}

export default TaskCard