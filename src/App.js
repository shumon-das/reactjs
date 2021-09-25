import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
// import useState from 'react'

function App() {

const tasks = [
  {
      id: 1,
      text: 'Doctor Appoinment',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
  // eslint-disable-next-line no-sequences
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
  
]
    // const [tasks, setTasks] = useState([
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
    //         reminder: true,
    //     },
    //     {
    //         id: 3,
    //         text: 'Docker Ship',
    //         day: 'Feb 6th at 6:30pm',
    //         reminder: true
    //     },
        
    // ])

    const deleteTask = (id) => {
      console.log('delete', id);
    }

  return (
    <div className="container">
      <div className="app">
          <Header/>
          <Tasks tasks={tasks} onDelete={deleteTask}/>
      </div>

    </div>
  );
}

export default App;
