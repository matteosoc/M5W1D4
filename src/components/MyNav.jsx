import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';
import SwitchTheme from './SwitchTheme';

function MyNav({ word, keyUpFunction }) {

  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <Navbar expand="lg" className={theme === 'light' ? "mb-5" : "bg-dark"}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Broswe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <SwitchTheme />
      <Form.Control
        type="text"
        placeholder="Search"
        className=" mr-sm-2"
        value={word}
        onChange={keyUpFunction}
      />
    </Navbar>
  );
}

export default MyNav;