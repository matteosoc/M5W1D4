import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';
import SwitchTheme from './SwitchTheme';
import { Link } from 'react-router-dom';
import './MyNav.css'

function MyNav({ word, keyUpFunction }) {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Navbar className='p-2' expand="lg" bg={theme === "light" ? "light" : "dark"} data-bs-theme={theme === "light" ? "light" : "dark"}>
      <Container>
        <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav>
          <SwitchTheme />
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={word}
              onChange={keyUpFunction}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;