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
                    <input type = "text"  className ="TodoInput bg-gray-300 text-xl" placeholder="Take Over the World..."  value = {value} onChange = {(e) => setValue(e.target.value)}/>
                    <button type="submit" className="TodoButton bg-gray-600 text-gray-300 text-xl hover:bg-gray-500">Add  Task</button>
                </form>

        )}

