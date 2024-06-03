import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { useContext } from "react";
import { CreateTodoContext } from "../context/CreateTodoContext";

const todoFormSchema = yup.object().shape({
  title: yup.string().required("El titulo es requerido"),
  description: yup.string().required("La descrición es requerida"),
  expiryDate: yup.date().required("La fecha es requerida"),
  notes: yup.string().required("La nota es rquerida"),
});

export default function TodoForm() {
  const { setTodos } = useContext(CreateTodoContext);
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
          expiryDate: "",
          notes: "",
        }}
        validationSchema={todoFormSchema}
        onSubmit={(values, { resetForm }) => {
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
          resetForm();
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Container fixed>
            <Typography color="secundary" variant="h3" align="center">
              Agregar nueva tarea
            </Typography>
            <Form onSubmit={handleSubmit}>
              <Grid
                container
                direction="column"
                justifyContent={"space-between"}
                spacing={2}
              >
                <Grid item xs={12} md={7}>
                  <TextField
                    type="text"
                    label="ingrese el titulo"
                    fullWidth
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    error={errors.title && touched.title}
                    helperText={errors.title}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <TextField
                    type="text"
                    label="ingrese la descripción"
                    fullWidth
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                    error={errors.description && touched.description}
                    helperText={errors.description}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <TextField
                    type="date"
                    //label="ingrese el fecha de vencimiento"
                    fullWidth
                    value={values.expiryDate}
                    name="expiryDate"
                    onChange={handleChange}
                    error={errors.expiryDate && touched.expiryDate}
                    helperText={errors.expiryDate}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <TextField
                    type="text"
                    label="ingrese notas"
                    fullWidth
                    value={values.notes}
                    name="notes"
                    onChange={handleChange}
                    error={errors.notes && touched.notes}
                    helperText={errors.notes}
                  />
                </Grid>
              </Grid>
              <Typography align="center">
                <Button type="submit" onSubmit={handleSubmit}>
                  Agregar
                </Button>
              </Typography>
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
