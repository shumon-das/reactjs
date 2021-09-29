import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!text){
            alert('Please add task')
            return
        }

        onAdd({text, day, reminder})
        
        setText('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Task</label>
                <input type="text" placeholder="Task Name"  className="form-control" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Date & time" className="form-control" value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Reminder</label>
                <input type="checkbox" className="form-check-input" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <div className="form-group">
                 <input type="submit" value="Save Task"  className="btn btn-success"/>
            </div>
            <br />
        </form>
    )
}

export default AddTask
