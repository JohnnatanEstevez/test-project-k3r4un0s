import {
  Button,
  ButtonGroup,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

export default function Todo({ todo }) {
  console.log(todo);
  return (
    <>
      <TableBody>
        <TableRow key={todo.name}>
          <TableCell align="center">{todo.title}</TableCell>
          <TableCell align="center">{todo.description}</TableCell>
          <TableCell align="center">{todo.expiryDate}</TableCell>
          <TableCell align="center">
            <Checkbox size="small" checked={todo.done} />
          </TableCell>
          <TableCell align="center">{todo.notes}</TableCell>
          <TableCell align="center">
            <ButtonGroup>
              <Button>edit</Button>
              <Button>delet</Button>
            </ButtonGroup>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}
