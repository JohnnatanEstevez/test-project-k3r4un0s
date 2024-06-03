import "./App.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { TodoDetails } from "./components/TodoDetails";
const FormTodos = lazy(() => import("./components/FormTodos"));
const TodoList = lazy(() => import("./components/TodoList"));
const TodoForm = lazy(() => import("./components/TodoForm"));
const FetchApi = lazy(() => import("./components/FetchApi"));
const TodosDone = lazy(() => import("./components/TodosDone"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/todolist"
            element={
              <Suspense fallback={<h1>Cargando...</h1>}>
                <TodoList />
              </Suspense>
            }
          />
          <Route
            path="/addtodo"
            element={
              <Suspense fallback={<h1>Cargando...</h1>}>
                <TodoForm />
              </Suspense>
            }
          />
          <Route
            path="/details/:title"
            element={
              <Suspense fallback={<h1>Cargando...</h1>}>
                <TodoDetails />
              </Suspense>
            }
          />

          <Route
            path="/formApi"
            element={
              <Suspense fallback={<h1>Cargando...</h1>}>
                <FormTodos />
              </Suspense>
            }
          ></Route>
          <Route
            path="/todosDone"
            element={
              <Suspense fallback={<h1>Cargando...</h1>}>
                <TodosDone />
              </Suspense>
            }
          />
          <Route
            path="/api"
            element={
              <Suspense fallback={<h1>Cargando...</h1>}>
                <FetchApi />
              </Suspense>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
