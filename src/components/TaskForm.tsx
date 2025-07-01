import { Form, Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useState } from "react";

const TaskForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { tasks, addTask, updateTask } = useTasks();
  const navigate = useNavigate();

  const editing = Boolean(id);
  const taskToEdit = editing ? tasks.find((t) => t.id === id) : null;

  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [description, setDescription] = useState(taskToEdit?.description || "");
  const [status, setStatus] = useState(taskToEdit?.status || "To Do");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    if (editing && taskToEdit) {
      updateTask({ ...taskToEdit, title, description, status });
    } else {
      addTask({ id: Date.now().toString(), title, description, status });
    }
    navigate("/");
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{editing ? "Edit Task" : "Create Task"}</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={e => setTitle(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={description} onChange={e => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
              <option>To Do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            {editing ? "Update Task" : "Create Task"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default TaskForm;