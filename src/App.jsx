/**
 * App
 */
import React from 'react';
/* components */
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
/* hooks */
import { useApp  } from './hooks/useApp';

/* styles */
import './App.css';

/**
 * App
 * @returns
 */
export const App = () => {
  /*hooks*/
  const {states, actions} = useApp();
  return (
  <div className="App">
    <h1 className="title">TodoList</h1>
    {/*Todo追加領域*/}
    <section className="common-area">
      <AddTodo 
        addInputValue={states.addInputValue}
        onChangeAddInputValue={actions.onChangeAddInputValue}
        handleAddTodo={actions.handleAddTodo}
      />
    </section>
    {/*Todo一覧表示領域*/}
    <section className="common-area">
      <TodoList
        todoList={states.todoList}
        handleDeleteTodo={actions.handleDeleteTodo}
      />
    </section>
  </div>
  );
};
