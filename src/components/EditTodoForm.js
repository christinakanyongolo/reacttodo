    import React, { useState } from 'react';
    import { TodoWrapper } from './TodoWrapper';
    import '../App.css';
    
    export const EditTodoForm = ({ editTodo, task }) => {
        const [value, setValue] = useState(task.task);
    
        const handleSubmit = (e ) => {
            console.log("Submitting Todo");
            e.preventDefault( );
            editTodo(value, task.id); 
            setValue("")
    
        } 
    
        return(   
                <form className ="TodoForm text-xl" onSubmit = {handleSubmit}>
                    <input type = "text" className ="TodoInput bg-gray-300 dark:bg-gray-500 text-xl" placeholder= "Edit Task..."  value = {value} onChange = {(e) => setValue(e.target.value)}/>
                    <button type="submit" className="TodoButton bg-gray-600 dark:bg-gray300 text-gray-300  dark:text-gray-500 text-xl hover:bg-gray-500 transform transition-transform duration-300 hover:scale-95">Update Task</button>
                </form>
    
        )}
    