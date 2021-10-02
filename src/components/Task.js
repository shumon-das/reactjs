/* eslint-disable no-cond-assign */
import { FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.title} <FaTimes style={{fontSize: "25px",cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.body}</p>
        </div>
    )
}

export default Task
