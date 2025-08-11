import React, {useState} from 'react';
import  {TodoForm} from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import '../App.css';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'; 
uuidv4(); 


export const TodoWrapper = () => {
        const [todos, setTodos] = useState([])
        
        const addTodo = todo => {
            setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
            console.log(todos)
            return todos;
    }



    const toggleComplete = id => { 
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }

    const editTodo = id => { 
        setTodos(todos.map(todo => todo.id === id ?  {...todo, isEditing: !todo.isEditing} : todo))
    }


const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo))
}

    return ( 
    <div className="TodoWrapper bg-turquoise  dark:bg-darkturquoise w-screen h-screen"> 
        <div className= "w-50">
        <h1 className = "text-5xl pt-10 text-black dark:text-gray-200">To-do List</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
            return todo.isEditing ? (
                <EditTodoForm editTodo = {editTask} task = {todo} />
            ) : (
                <Todo key={index}
                    task={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                />
            );
        })}
        </div>
    </div>
)};