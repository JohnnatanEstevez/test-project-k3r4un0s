import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Todo from "./Todo";
import { useContext } from "react";
import { CreateTodoContext } from "../context/CreateTodoContext";
export default function TodoList() {
  const { todos } = useContext(CreateTodoContext);

  return (
    <>
      <h1>Lista de tareas</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Título</TableCell>
              <TableCell align="center">Descripción</TableCell>
              <TableCell align="center">Fecha de vencimiento</TableCell>
              <TableCell align="center">Estado</TableCell>
              <TableCell align="center">Notas</TableCell>
              <TableCell align="center">Accion</TableCell>
            </TableRow>
          </TableHead>
          {todos.map((todo) => (
            <Todo key={todo.title} todo={todo} />
          ))}
        </Table>
      </TableContainer>
    </>
  );
}
