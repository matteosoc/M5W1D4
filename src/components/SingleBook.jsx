import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './SingleBook.css'
import CommentArea from './CommentArea';


function SingleBook({book}) {
  const [selected,setSelected] = useState(false)

  const handleSelect = () => {
    setSelected(!selected)
  }


  return (
    <Col md={3}>
        <Card className={selected ? 'mb-3 border' : 'mb-3'}>
          <Card.Img variant="top" src={book.img} onClick={handleSelect} />
          <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.price} €</Card.Text>
              {selected && <CommentArea asin={book.asin}/>}
          </Card.Body>
        </Card>
    </Col>
  );
}

export default SingleBook;