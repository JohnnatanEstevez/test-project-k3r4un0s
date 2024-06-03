import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Home</h1>
      <div className="flex-apart">
        <Link to="/addTodo">Agregar tarea</Link>
        <Link to="/todolist">Ver lista de tareas</Link>
        <Link to="/todosDone">Lista de tareas realizadas</Link>
        <Link to="/formApi">Lista de tareas integrada con agregar tarea</Link>
        <Link to="/api">api</Link>
      </div>
    </div>
  );
}
