import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react'
import AddTask from './components/AddTask';


function App() {
    const [showAddTask, setShowAddTask] = useState(false)
  //   var dumyData = [
  //     {
  //         id: 1,
  //         text: 'Doctor Appoinment',
  //         day: 'Feb 6th at 1:30pm',
  //         reminder: true,
  //     },
  //     {
  //         id: 2,
  //         text: 'Meeting at offic',
  //         day: 'Feb 6th at 4:20pm',
  //         reminder: false,
  //     },
  //     {
  //         id: 3,
  //         text: 'Docker Ship',
  //         day: 'Feb 6th at 6:30pm',
  //         reminder: true
  //     },
      
  // ]
    const [tasks, setTasks] = useState([])

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

      fetch('https://jsonplaceholder.typicode.com/posts', {
                      method: 'POST',
                      headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                      },
                      body: JSON.stringify(task),
                    })
                    .then((response) => response.json())
                    .then((data) => {
                      setTasks([...tasks, data]) 
                    }
                    );
            // const data = result.json()
            // setTasks([...tasks, data])        

      //  const id = Math.floor(Math.random() * 1000) + 1
      //  const newTask = { id, ...task }
      //  setTasks([...tasks, newTask])
      //  console.log(newTask)
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
    <Router>
    <div className="container">
      <div className="app">
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
         
      </div>
      <Route path="/" exact render={()=>(
        <>
         {showAddTask && <AddTask onAdd={addTask} />}
         {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)
                           : (<h3>No Tasks</h3>)
         }
        </> 
      )}/>
      <Route path="/about" component={About}/>
      <Footer />
    </div>
    </Router>
  )
}

export default App;
