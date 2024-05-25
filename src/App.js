import "./App.css";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import Todo from "./components/Todo";
function App() {
  return (
    <>
      <h1>Detalles del todo</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Título</TableCell>
              <TableCell align="center">Descripción</TableCell>
              <TableCell align="center">Fecha vencimiento</TableCell>
              <TableCell align="center">Estado actual</TableCell>
              <TableCell align="center">Notas</TableCell>
              <TableCell align="center">Acción</TableCell>
            </TableRow>
          </TableHead>
          <Todo />
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
