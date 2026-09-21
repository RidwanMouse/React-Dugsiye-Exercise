import { useState } from "react";
import styles from "./pp.module.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "hey whtsapp", completed: false },
    { id: 2, text: "how are yu doing", completed: true },
    { id: 3, text: "This is cool right ?", completed: false },
    { id: 4, text: "hey facebook ?", completed: true },

  ]);
  

  // Add Todo
  const addTodo = () => {
    if (todo.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTodo("");
  };

  // Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  // Check / Uncheck
  const toggleTodo = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.app}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <button className={styles.activeNav}>Todo App</button>
        <button className={styles.navButton}>Study Timer</button>
      </nav>

      {/* Main */}
      <main className={styles.main}>
        <div className={styles.todoCard}>
          <h1>My Todo List</h1>

          {/* Input */}
          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Add a new todo..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={addTodo} className={styles.addButton}>
              Add
            </button>
          </div>

          {/* Todo List */}
          <div className={styles.todoList}>
            {todos.map((item) => (
              <div
                key={item.id}
                className={`${styles.todoItem} ${
                  item.completed ? styles.completed : ""
                }`}
              >
                <div className={styles.todoLeft}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleTodo(item.id)}
                  />

                  <span>{item.text}</span>
                </div>

                {item.completed && (
                  <button
                    className={styles.deleteButton}
                    onClick={() => deleteTodo(item.id)}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;