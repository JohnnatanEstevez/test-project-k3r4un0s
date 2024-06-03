import { useState, useEffect } from "react";
import { CreateTodoContext } from "./CreateTodoContext";

export default function StateTodosContext({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch("/db.json");
      const json = await response.json();
      setTodos(json);
    }
    getTodos();
  }, []);
  return (
    <CreateTodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </CreateTodoContext.Provider>
  );
}
