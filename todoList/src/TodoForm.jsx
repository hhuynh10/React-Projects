import React, { useState } from "react";

const TodoForm = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (todo === "") return;
    setTodoList((currentList) => {
      return [
        ...currentList,
        { todo: todo, checked: false, id: crypto.randomUUID() },
      ];
    });
    setTodo("");
  };
  return (
    <form onSubmit={submitHandler}>
      <label>New Todo</label>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
