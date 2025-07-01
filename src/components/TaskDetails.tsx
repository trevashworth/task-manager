import { useParams, useNavigate, Link } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import { useTasks } from "../context/TaskContext";

const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, deleteTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);
  if (!task) return <div>Task not found.</div>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {task.title}{" "}
          <Badge bg={task.status === "Completed" ? "success" : "secondary"}>{task.status}</Badge>
        </Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Button as={Link} to={`/edit/${task.id}`} variant="secondary" className="me-2">Edit</Button>
        <Button variant="danger" onClick={() => { deleteTask(task.id); navigate('/'); }}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default TaskDetails;