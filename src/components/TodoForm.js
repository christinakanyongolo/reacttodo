import React, { useState } from 'react';
import { TodoWrapper } from './TodoWrapper';
import '../App.css';

    export const TodoForm = ({ addTodo }) => {
        const [value, setValue] = useState("");

        const handleSubmit = (e ) => {
            console.log("Submitting Todo");
            console.log("addtodo", addTodo);
            e.preventDefault( );
            addTodo(value); 
            setValue("")

        } 

        return(   
                <form className ="TodoForm pt-5" onSubmit = {handleSubmit}>
                    <input type = "text"  className ="TodoInput bg-gray-200 text-xl" placeholder="Take Over the World..."  value = {value} onChange = {(e) => setValue(e.target.value)}/>
                    <button type="submit" className="TodoButton bg-gray-600 dark:bg-green-500 text-gray-200 dark:text-black text-xl hover:bg-gray-400 transform transition-transform duration-300 hover:scale-95">Add  Task</button>
                </form>

        )}
