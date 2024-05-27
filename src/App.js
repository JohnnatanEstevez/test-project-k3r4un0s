import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Home from "./components/Home";
import { TodoDetails } from "./components/TodoDetails";
import FetchApi from "./components/FetchApi";
import StateTodosContext from "./context/StateTodosContext";
function App() {
  return (
    <>
      <StateTodosContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/todolist" element={<TodoList />}></Route>
            <Route path="/addtodo" element={<TodoForm />}></Route>
            <Route path="/details/:title" element={<TodoDetails />}></Route>
            <Route path="/api" element={<FetchApi />}></Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </StateTodosContext>
    </>
  );
}

export default App;
