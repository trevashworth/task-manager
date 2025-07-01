import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskList: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <Card>
      <Card.Header as="h4">Your Tasks</Card.Header>
      <ListGroup variant="flush">
        {tasks.length === 0 && (
          <ListGroup.Item>No tasks yet!</ListGroup.Item>
        )}
        {tasks.map((task) => (
          <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{task.title}</strong>
              <div className="text-muted">{task.description || "No description"}</div>
              <span className={`badge bg-${task.status === "Completed" ? "success" : "secondary"} me-2`}>
                {task.status}
              </span>
            </div>
            <div>
              <Button as={Link} to={`/tasks/${task.id}`} variant="info" size="sm" className="me-2">
                Details
              </Button>
              <Button as={Link} to={`/edit/${task.id}`} variant="secondary" size="sm">
                Edit
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Footer>
        <Button as={Link} to="/create" variant="primary">+ New Task</Button>
      </Card.Footer>
    </Card>
  );
};
export default TaskList;