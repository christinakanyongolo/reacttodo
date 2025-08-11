import React from 'react';
import { TodoWrapper } from './TodoWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
     return (
          <div className="Todo text-xl bg-gray-600 text-gray-300"  >
               <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>  {task.task}</p>
               <div>
                    < FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} className="hover:bg-green-800" />
                    < FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} className="hover:bg-red-800" />
               </div>
          </div>


     )
}