/**
 * TodoList
 */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
/* styles */
import "../TodoList/style.css"

/**
 * TodoList
 * @param {*} props 
 * @returns 
 */
export const TodoList = (props) => {
  /*props*/
  const { todoList, handleDeleteTodo} = props;

  return (
    <ul className="todo-list">
        {todoList.map((todo) => {
          return (
            <li className="todo" key={todo.id}>
              <span className="todo-task">{todo.title}</span>
              <FontAwesomeIcon className="faTrash" icon={faTrash} 
                onClick={() => handleDeleteTodo(todo.id, todo.title)}
              />
          </li>
          );
        })};
      </ul>
  )
};  