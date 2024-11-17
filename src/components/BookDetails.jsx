import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import CommentArea from './CommentArea';
import books from '../data/fantasy.json'
import { Card } from 'react-bootstrap';

import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';



function BookDetails() {
    const { asin } = useParams();
    const {theme, setTheme} = useContext(ThemeContext)

    const book = books.filter((book) => {
        return book.asin.includes(`${asin}`)
    });

    // console.log(book[0].title)

    return (
        <Container fluid className={theme === 'light' ? "p-3" : "bg-dark text-white p-3"}>
            <Row>
                <Col md={4}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={book[0].img} />
                            <Card.Body>
                                <Card.Title>{book[0].title}</Card.Title>
                                <Card.Text>{book[0].price} €</Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
                <Col md={6}>
                    <CommentArea asin={asin}></CommentArea>
                </Col>
            </Row>
        </Container>

    )
}

export default BookDetails;

/*
<AddComment asin={asin} loadComments={loadComments} />
<h4>Recensioni</h4>
<CommentList comments={comments} loadComments={loadComments} />
<Link to='/'>Torna alla Home</Link>
*/