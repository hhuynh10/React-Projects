import React, { useState } from "react";
import EditTodo from "./EditTodo";

const DisplayTodos = ({ todoList, setTodoList }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewtodo] = useState("")

  const deleteTodo = (id) => {
    setTodoList((currentList) => {
      return currentList.filter((item) => item.id !== id);
    });
  };

  const checkedTodo = (id, checked) => {
    setTodoList((currentList) => {
      return currentList.map((item) => {
        if (item.id === id) {
          return { ...item, checked };
        }
        return item;
      });
    });
  };
  return (
    <div>
      <ol>
        {todoList.map((todo) => {
          return (
            <div key={todo.id}>
              {isEdit ? (
                <form>
                  <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewtodo(e.target.value)}
                  />
                  <span className={`${todo.checked && "checked"}`}>
                    {todo.todo}
                  </span>
                  <button onClick={() => setIsEdit(false)}>Save</button>
                </form>
              ) : (
                <li>
                  <input
                    type="checkbox"
                    onChange={(e) => checkedTodo(todo.id, e.target.checked)}
                  />
                  <span className={`${todo.checked && "checked"}`}>
                    {todo.todo}
                  </span>
                  <button onClick={() => setIsEdit(true)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
              )}
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default DisplayTodos;
