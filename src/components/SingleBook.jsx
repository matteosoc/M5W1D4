import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './SingleBook.css'

import { Link } from 'react-router-dom';

import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';



function SingleBook({ book, selected, handleSelected }) {

  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <Col md={4} sm={6} lg={4}>
      <Card
        className={
          selected === book.asin ? 'mb-3 border' : 'mb-3'
        }>
        <Card.Img variant="top" src={book.img} onClick={() => handleSelected(book.asin)} />
        <Card.Body className={theme === 'light' ? "bg-white" : "bg-dark text-white"}>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price} €</Card.Text>
          <Button
            as={Link}
            to={`/books/${book.asin}`}
            variant="primary"
            size="sm"
          >
            Scopri di più
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;

// {selected && Comment area ... }