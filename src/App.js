import './App.css';
import React, {useState}from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
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
      <button className = "absolute w-10 h-10 top-10 right-16 bg-black text-white dark:bg-white text-xl rounded-full" onClick={toggleDarkMode} >
        {darkMode ? ( 
          <SunIcon className="w-10 h-10 text-yellow-500" />
        ):(
           <MoonIcon className="w-10 h-10 text-gray-200" />)}
      </button>
    </div>
  );
}

export default App;
