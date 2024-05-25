import {
  Button,
  ButtonGroup,
  Checkbox,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const todoData = {
  title: "titulo 1",
  description: "descriptoin 1",
  expiryDate: "11/23/2025",
  done: "false",
  notes: "estas son las notas",
};

export default function Todo() {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell align="center">{todoData.title}</TableCell>
          <TableCell align="center">{todoData.description}</TableCell>
          <TableCell align="center">{todoData.expiryDate}</TableCell>
          <TableCell align="center">
            <Checkbox size="small" />
          </TableCell>
          <TableCell align="center">{todoData.notes}</TableCell>
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
