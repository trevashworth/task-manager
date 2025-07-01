import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";
import PrivateRoute from "./components/PrivateRoute";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <Router>
        <NavBar />
        <Container style={{ maxWidth: 650 }}>
          <Routes>
            <Route path="/" element={
              <PrivateRoute>
                <TaskList />
              </PrivateRoute>
            } />
            <Route path="/tasks/:id" element={
              <PrivateRoute>
                <TaskDetails />
              </PrivateRoute>
            } />
            <Route path="/create" element={
              <PrivateRoute>
                <TaskForm />
              </PrivateRoute>
            } />
            <Route path="/edit/:id" element={
              <PrivateRoute>
                <TaskForm />
              </PrivateRoute>
            } />
          </Routes>
        </Container>
      </Router>
    </TaskProvider>
  );
}
export default App;