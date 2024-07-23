/**
 * useApp
 */
import React from "react";
/* constants */
import { INIT_TODO_LIST, INIT_TODO_ID } from "../constants/data"

/**
 * useApp
 * @returns 
 */
export const useApp = () => {
  /*state*/
  /*todo list */
  const [todoList, setTodoList] = React.useState(INIT_TODO_LIST);
  /* add input value */
  const [addInputValue, setAddInputValue] = React.useState("");
  /* 再番用ID */
  const [uniqueId, setUniqueId] = React.useState(INIT_TODO_ID);

  /**
   * addInputValue更新処理
   * @param {*} e 
   */
  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  /**
   * タスク更新処理
   * @param {*} e 
   */
  const handleAddTodo = (e) => {
    //エンターキークリックかつaddInputValuegaが空文字じゃない時
    if (e.key === "Enter" && addInputValue !== "") {
      const nestUniquId = uniqueId + 1;
      //Todo追加処理
      const newTodoList = [
        ...todoList,
        {
          id: nestUniquId,
          title: addInputValue,
        },
      ];
      setTodoList(newTodoList);
      // IDをインクリメント
      setUniqueId(nestUniquId);
      // addInputValueをリセット
      setAddInputValue("");
    };
  };

  /**
   * タスク削除処理
   * @param {*} targetId 
   */
 const handleDeleteTodo = (targetId, targetTitle) => {
  if (window.confirm(`${targetTitle}のTodoを削除しますか`)) {
  const newTodoList = todoList.filter((todo) => {
    return todo.id !== targetId;
  });
  setTodoList(newTodoList);
  };
 };

 return {
  states: {
    todoList,
    addInputValue,
  },
  actions: {
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
  },
};
};