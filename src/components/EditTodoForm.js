    import React, { useState } from 'react';
    import { TodoWrapper } from './TodoWrapper';
    
    export const EditTodoForm = ({ editTodo, task }) => {
        const [value, setValue] = useState(task.task);
    
        const handleSubmit = (e ) => {
            console.log("Submitting Todo");
            e.preventDefault( );
            editTodo(value, task.id); 
            setValue("")
    
        } 
    
        return(   
                <form className ="TodoForm" onSubmit = {handleSubmit}>
                    <input type = "text"  className ="TodoInput" placeholder= "Edit Task"  value = {value} onChange = {(e) => setValue(e.target.value)}/>
                    <button type="submit" className="TodoButton">Update Task</button>
                </form>
    
        )}
    