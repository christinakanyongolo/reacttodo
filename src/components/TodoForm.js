import React, { useState } from 'react';
import { TodoWrapper } from './TodoWrapper';

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
            <form className ="TodoForm" onSubmit = {handleSubmit}>
                <input type = "text"  className ="TodoInput" placeholder="Take Over the World..."  value = {value} onChange = {(e) => setValue(e.target.value)}/>
                <button type="submit" className="TodoButton">Add  Task</button>
            </form>

    )}
