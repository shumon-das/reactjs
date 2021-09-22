import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const display = () => {
    console.log(name + company);
  }

  const addData = () => {
    console.log(name)
      axios.post('http://localhost:3001/insert', {
        name,
        company
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(name)
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Covi Analytics </p>

        <div>
          <label>Name : </label>
          <input type="text" onChange={(event)=>{setName(event.target.value)}}></input>
        </div>
        <div>
          <label>Company : </label>
          <input type="text" onChange={(event)=> {setCompany(event.target.value)}}></input>
        </div>
        <button onClick={display}>Show Data</button>
        <button onClick={addData}>Send Data</button>

      </header>
    </div>
  );
}

export default App;
