import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  tableCellClasses,
  styled,
  Typography,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { CreateTodoContext } from "../context/CreateTodoContext";
import { Link } from "react-router-dom";
import Todo from "./Todo";

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

export default function TodosDone() {
  const { todos } = useContext(CreateTodoContext);

  const todosDoneFilter = todos.filter((todo) => todo.done === true);
  console.log(todosDoneFilter);
  return (
    <>
      <Typography align="center">Lista de tareas realizadas</Typography>
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
            {todosDoneFilter.map((todo) => (
              <Todo
                key={todo.title}
                todo={todo}
                StyledTableRow={StyledTableRow}
                StyledTableCell={StyledTableCell}
              />
            ))}
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
