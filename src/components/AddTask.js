import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [reminder, setReminder] = useState(101);

    const onSubmit = (e) => {
        e.preventDefault()
        
        if(!title){
            alert('Please add task')
            return
        }

        // onAdd({text, day, reminder})
        onAdd({title, body, reminder})
        
        setTitle('')
        setBody('')
        setReminder(false)

    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" placeholder="add title"  className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="form-group">
                <label>Body</label>
                <input type="text" placeholder="add body" className="form-control" value={body} onChange={(e) => setBody(e.target.value)}></input>
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
