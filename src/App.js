import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Home from "./components/Home";
import { TodoDetails } from "./components/TodoDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todolist" element={<TodoList />}></Route>
          <Route path="/addtodo" element={<TodoForm />}></Route>
          <Route path="/details/:title" element={<TodoDetails />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
