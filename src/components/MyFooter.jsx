import Nav from 'react-bootstrap/Nav';

function MyFooter() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="#">Broswe</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default MyFooter;