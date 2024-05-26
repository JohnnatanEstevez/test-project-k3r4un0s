import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="text-center">
        <Button type="text">
          <Link to="/todolist">Ver lista de tareas</Link>
        </Button>
        <Button type="text">
          <Link to="/addTodo">Agregar tarea</Link>
        </Button>
        <Button type="text">
          <Link to="/api">api</Link>
        </Button>
      </div>
    </div>
  );
}
