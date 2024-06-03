import { Button, ButtonGroup, Checkbox, FormControlLabel } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
export default function Todo({
  todo,
  StyledTableRow,
  StyledTableCell,
  onEdit,
  onDelete,
  handleChange,
}) {
  return (
    <>
      <StyledTableRow key={todo.title}>
        <StyledTableCell align="center" component="th" scope="row">
          {todo.title}
        </StyledTableCell>
        <StyledTableCell align="center">{todo.description}</StyledTableCell>
        <StyledTableCell align="center">{todo.expiryDate}</StyledTableCell>
        <StyledTableCell align="center">
          <FormControlLabel
            control={<Checkbox checked={todo.done} color="success" />}
            onChange={handleChange}
          />
        </StyledTableCell>
        <StyledTableCell align="center">{todo.notes}</StyledTableCell>
        <StyledTableCell align="center">
          <ButtonGroup>
            <Tooltip title="Editar">
              <Button onClick={onEdit}>
                <EditIcon fontSize="small" />
              </Button>
            </Tooltip>

            <Tooltip title="Delete">
              <Button onClick={onDelete}>
                <DeleteIcon fontSize="small" />
              </Button>
            </Tooltip>
            <Tooltip title="Ver detalles">
              <Link to={`/details/${todo.title}`}>
                <Button>
                  <RemoveRedEyeIcon fontSize="small" />
                </Button>
              </Link>
            </Tooltip>
          </ButtonGroup>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
}
