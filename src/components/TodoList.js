import {
  Typography,
  Button,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  tableCellClasses,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import Todo from "./Todo";
import { useState, useContext } from "react";
import { CreateTodoContext } from "../context/CreateTodoContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TodoList() {
  const { todos, setTodos } = useContext(CreateTodoContext);
  const [editRow, setEditRow] = useState(null);

  const handleEditStart = (editRow) => {
    setEditRow(editRow);
    console.log(editRow);
  };
  const handleDelete = (deleteIndex) => {
    setTodos((todos) => todos.filter((_, index) => index !== deleteIndex));
  };
  const handleChange = ({ target: todo }) => {
    setEditRow((prevEditRow) => ({ ...prevEditRow, title: todo.title }));
  };

  return (
    <>
      <h1 align="center">Lista de tareas</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Título</StyledTableCell>
              <StyledTableCell align="center">Descripción</StyledTableCell>
              <StyledTableCell align="center">
                Fecha de vencimiento
              </StyledTableCell>
              <StyledTableCell align="center">Estado</StyledTableCell>
              <StyledTableCell align="center">Notas</StyledTableCell>
              <StyledTableCell align="center">Accion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) =>
              todo.title === editRow?.title ? (
                <Todo
                  key={editRow.title}
                  todo={editRow}
                  StyledTableRow={StyledTableRow}
                  StyledTableCell={StyledTableCell}
                  onEdit={() => handleEditStart(editRow)}
                  onDelete={() => handleDelete(index)}
                  onChange={handleChange}
                />
              ) : (
                <Todo
                  key={todo.title}
                  todo={todo}
                  StyledTableRow={StyledTableRow}
                  StyledTableCell={StyledTableCell}
                  onEdit={() => handleEditStart(todo)}
                  onDelete={() => handleDelete(index)}
                />
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography align="center">
        <Link to="/" align="center">
          <Button align="center">Home</Button>
        </Link>
      </Typography>
    </>
  );
}
