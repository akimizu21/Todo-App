/**
 * AddTodo
 */
import React from "react";
/* styles */
import "../AddTodo/style.css"

/**
 * AddTodo
 * @param {} props 
 * @returns 
 */
export const AddTodo = (props) => {
  /*props*/
  const { addInputValue, onChangeAddInputValue, handleAddTodo} = props;

  return (
    <>
      <h2 className="add-title">ADD Todo</h2>
      <input 
        type='text' 
        value={addInputValue}
        onChange={onChangeAddInputValue}
        onKeyDown={handleAddTodo}
      />
    </>
    
  )
};