import './App.css';
import TodoForm from "./TodoForm";
import DisplayTodos from "./DisplayTodos";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [todoList, setTodoList] = useLocalStorage("todos", []);

  return (
    <div className="App">
      <DisplayTodos todoList={todoList} setTodoList={setTodoList} />
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
