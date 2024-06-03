import {
  Button,
  ButtonGroup,
  FormControl,
  Checkbox,
  TextField,
} from "@mui/material";
export default function AddTodo({
  StyledTableCell,
  StyledTableRow,
  isFormMode,
  onAdd,
  values,
  errors,
  touched,
  handleChange,
  onCancel,
  buttonText = "Crear",
}) {
  return (
    <>
      <StyledTableRow>
        {isFormMode ? (
          <>
            <StyledTableCell align="center">
              <TextField
                type="text"
                name="title"
                label="ingrese el titulo"
                value={values.title}
                onChange={handleChange}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                type="text"
                name="description"
                label="ingrese la descripción"
                value={values.description}
                onChange={handleChange}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                type="date"
                name="expiryDate"
                //label="ingrese el fecha de vencimiento"
                value={values.expiryDate}
                onChange={handleChange}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <FormControl control={<Checkbox color="success" />} />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                type="text"
                name="notes"
                label="ingrese notas"
                value={values.notes}
                onChange={handleChange}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <ButtonGroup>
                <Button type="submit">{buttonText}</Button>
                <Button onClick={onCancel}>Cancelar</Button>
              </ButtonGroup>
            </StyledTableCell>
          </>
        ) : (
          <StyledTableCell colSpan="6" align="center">
            <Button onClick={onAdd}>Agregar</Button>
          </StyledTableCell>
        )}
      </StyledTableRow>
    </>
  );
}
