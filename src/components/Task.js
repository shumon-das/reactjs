/* eslint-disable no-cond-assign */
import { FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={{fontSize: "25px",cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <h3>{task.day}</h3>
            <h3>{task.reminder = true ? "true" : "false"}</h3>
        </div>
    )
}

export default Task
