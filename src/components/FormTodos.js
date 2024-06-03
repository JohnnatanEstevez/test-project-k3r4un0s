import {
  Paper,
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  styled,
  TableCell,
  tableCellClasses,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import * as yup from "yup";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useContext, useState } from "react";
import { CreateTodoContext } from "../context/CreateTodoContext";
const todoFormSchema = yup.object().shape({
  title: yup.string().required("El titulo es requerido"),
  description: yup.string().required("La descrición es requerida"),
  expiryDate: yup.date().required("La fecha es requerida"),
  notes: yup.string().required("La nota es requerida"),
});
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

export default function FormTodos() {
  const { todos, setTodos } = useContext(CreateTodoContext);
  const [editTodoIndex, setEditTodoIndex] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCancel = () => {
    setIsCreating(false);
  };
  const handleDelete = (deleteIndex) => {
    setTodos((todos) => todos.filter((_, index) => index !== deleteIndex));
  };
  const editedTodo = todos[editTodoIndex];
  console.log(editedTodo);
  return (
    <div>
      <Formik
        noValidate
        validationSchema={todoFormSchema}
        onSubmit={(values, { resetForm }) => {
          if (editTodoIndex) {
            setTodos((todos) =>
              todos.map((todo, index) =>
                index === editTodoIndex ? { ...values } : todo
              )
            );
            setEditTodoIndex(null);
          } else {
            setTodos((state) => [
              ...state,
              {
                title: values.title,
                description: values.description,
                expiryDate: values.expiryDate,
                done: false,
                notes: values.notes,
              },
            ]);
          }

          resetForm();
          setIsCreating(false);
        }}
        enableReinitialize
        initialValues={
          editTodoIndex
            ? {
                title: editedTodo.title,
                description: editedTodo.description,
                expiryDate: editedTodo.expiryDate,
                notes: editedTodo.notes,
              }
            : {
                title: "",
                description: "",
                expiryDate: "",
                done: false,
                notes: "",
              }
        }
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Container fixed>
            <Typography color="secundary" variant="h3" align="center">
              Lista de tareas
            </Typography>
            <Form onSubmit={handleSubmit}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">Título</StyledTableCell>
                      <StyledTableCell align="center">
                        Descripción
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Fecha de vencimiento
                      </StyledTableCell>
                      <StyledTableCell align="center">Estado</StyledTableCell>
                      <StyledTableCell align="center">Notas</StyledTableCell>
                      <StyledTableCell align="center">Acción</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todos.map((todo, index) =>
                      index === editTodoIndex ? (
                        <AddTodo
                          key={todo.title}
                          StyledTableRow={StyledTableRow}
                          StyledTableCell={StyledTableCell}
                          isFormMode={true}
                          values={values}
                          errors={errors}
                          touched={touched}
                          handleChange={handleChange}
                          buttonText="Actualizar"
                          onCancel={() => setEditTodoIndex(null)}
                        />
                      ) : (
                        <Todo
                          key={todo.title}
                          todo={todo}
                          handleChange={handleChange}
                          StyledTableRow={StyledTableRow}
                          StyledTableCell={StyledTableCell}
                          onEdit={() => setEditTodoIndex(index)}
                          onDelete={() => handleDelete(index)}
                        />
                      )
                    )}
                    <AddTodo
                      StyledTableRow={StyledTableRow}
                      StyledTableCell={StyledTableCell}
                      isFormMode={isCreating}
                      onAdd={() => setIsCreating(true)}
                      values={values}
                      handleChange={handleChange}
                      onCancel={handleCancel}
                    />
                  </TableBody>
                </Table>
              </TableContainer>
            </Form>
          </Container>
        )}
      </Formik>
      <Typography align="center">
        <Link to="/" align="center">
          <Button align="center">Home</Button>
        </Link>
      </Typography>
    </div>
  );
}
