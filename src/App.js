import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';


function App() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appoinment',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at offic',
            day: 'Feb 6th at 4:20pm',
            reminder: false,
        },
        {
            id: 3,
            text: 'Docker Ship',
            day: 'Feb 6th at 6:30pm',
            reminder: true
        },
        
    ])

    useEffect(() => {
      const getTasks = async () => {
        const getTasksFromServer = await fetchTasks()
        setTasks(getTasksFromServer)
      }

      getTasks()
    }, [])

    // get tasks from server
    const fetchTasks = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await result.json()
      return data
    }

    // addTask
    const addTask = (task) => {
       const id = Math.floor(Math.random() * 1000) + 1
       const newTask = { id, ...task }
       setTasks([...tasks, newTask])
       console.log(newTask)
    }

    // delete specific task 
    const deleteTask = async (id) => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'DELETE',
      })

      setTasks(tasks.filter(
        (task) => task.id !== id
      ))
    }

    // toggleReminder 
    const toggleReminder = (id) => {
      setTasks(tasks.map(
        (task) => task.id === id ? {...task, reminder: !task.reminder }
                                 : task
      ))
    }

  return (
    <div className="container">
      <div className="app">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
                            : (<h3>No Tasks</h3>)
          }
      </div>

    </div>
  );
}

export default App;
