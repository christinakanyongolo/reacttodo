import React from 'react';
import { TodoWrapper } from './TodoWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
     return (
          <div className="flex justify-center">
          <div className= "TodoContainer w-[500px] content-center">
          <div className="Todo text-xl bg-gray-600 dark:bg-gray-200 text-gray-100 dark:text-black transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"  >
               <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>  {task.task}</p>
               <div>
                    < FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className="hover:text-green-500 text-gray-100 dark:text-black dark:hover:text-green-500" />
                    < FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="hover:text-red-700  text-gray-100 dark:text-black dark:hover:text-red-600" />
               </div>
          </div>
          </div>
          </div> 


     )
}