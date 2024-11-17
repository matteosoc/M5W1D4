import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function MyFooter() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Container fluid className={theme === 'light' ? 'bg-light' : 'bg-dark text-white'} >
      <Nav className="justify-content-center" activeKey="/home"
        >
        <Nav.Item>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
}

export default MyFooter;