import {
  Button,
  ButtonGroup,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
export default function Todo({ todo }) {
  console.log(todo);
  return (
    <>
      <TableBody>
        <TableRow key={todo.title}>
          <TableCell align="center">{todo.title}</TableCell>
          <TableCell align="center">{todo.description}</TableCell>
          <TableCell align="center">{todo.expiryDate}</TableCell>
          <TableCell align="center">
            <Checkbox size="small" checked={todo.done} />
          </TableCell>
          <TableCell align="center">{todo.notes}</TableCell>
          <TableCell align="center">
            <ButtonGroup>
              <Button>
                <EditIcon fontSize="small" />
              </Button>
              <Button>
                <DeleteIcon fontSize="small" />
              </Button>
              <Button>
                <Link to={`/details/${todo.title}`}>
                  <RemoveRedEyeIcon fontSize="small" />
                </Link>
              </Button>
            </ButtonGroup>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
