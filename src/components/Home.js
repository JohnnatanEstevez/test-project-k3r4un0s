import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex-apart">
        <Link to="/todolist">Ver lista de tareas</Link>

        <Link to="/addTodo">Agregar tarea</Link>

        <Link to="/api">api</Link>
      </div>
    </div>
  );
}
