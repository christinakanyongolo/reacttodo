import './App.css';
import React, {useState}from 'react';
import { TodoWrapper } from './components/TodoWrapper';
import { TodoForm } from './components/TodoForm';
import { EditTodoForm } from './components/EditTodoForm';


function App() {
  const[darkMode, setDarkMode]= useState(false); 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
   <div className= {`${darkMode && "dark"}`}>
      <div className="App">
    
        <TodoWrapper/>
      </div>
      <button className = "absolute w-16 h-18 bottom-16 right-16 bg-black text-white dark:bg-white" onClick={toggleDarkMode} >
        {darkMode ? "light": "dark"}
      </button>
    </div>
  );
}

export default App;
