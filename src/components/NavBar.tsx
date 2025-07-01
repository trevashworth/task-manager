import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const AppNavbar: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Task Manager</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/create">Create Task</Nav.Link>
        </Nav>
        <Nav>
          {!isAuthenticated && (
            <Button variant="outline-light" onClick={() => loginWithRedirect()}>Log In</Button>
          )}
          {isAuthenticated && (
            <>
              <span className="text-white me-2">Hi, {user?.name}</span>
              <Button variant="outline-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;