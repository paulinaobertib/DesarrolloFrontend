import { useState } from "react";
import type { KeyboardEvent } from "react";
import styles from "./NoteList.module.css";
import ListItem from "./ListItem";

function NoteList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTodo = () => {
    const normalizedTask = newTask.trim();
    if (!normalizedTask) return;
    setTodos((current) => [...current, normalizedTask]);
    setNewTask("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTodo();
    }
  };

  const taskLabel = todos.length === 1 ? "tarea pendiente" : "tareas pendientes";
  const isAddDisabled = newTask.trim().length === 0;

  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Lista de tareas</h2>
          <p className={styles.description}>
            Organiza tus pendientes y manten el ritmo del dia.
          </p>
        </div>
        <span className={styles.badge}>{todos.length}</span>
      </header>

      <div className={styles.newTask}>
        <input
          className={styles.input}
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe una nueva tarea"
        />
        <button
          type="button"
          className={styles.addButton}
          onClick={addTodo}
          disabled={isAddDisabled}
        >
          Agregar
        </button>
      </div>

      {todos.length > 0 ? (
        <>
          <p className={styles.counter}>
            Tienes {todos.length} {taskLabel}.
          </p>
          <ul className={styles.list}>
            {todos.map((todo, index) => (
              <ListItem key={`${todo}-${index}`} text={todo} />
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.emptyState}>
          No hay tareas todavia. Agrega la primera y comienza tu lista!
        </p>
      )}
    </section>
  );
}

export default NoteList;
