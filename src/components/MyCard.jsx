import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function MyCard({book}) {
  return (
    <Col md={3}>
        <Card>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.price} €</Card.Text>
            <Button variant="primary">Scopri di più</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default MyCard;