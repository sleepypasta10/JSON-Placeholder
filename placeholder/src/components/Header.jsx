import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink className='nav-link fw-bold' to="/users">Users</NavLink>
            <NavLink className='nav-link fw-bold' to="/photos">Photos</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
  }
  export default Header;