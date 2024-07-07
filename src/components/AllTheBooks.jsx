import { useState } from 'react';
import books from '../data/fantasy.json'
import SingleBook from './SingleBook'
import Spinner from 'react-bootstrap/Spinner';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


function AllTheBooks() {
    const [word, setWord] = useState('')
    const [filteredBooks, setFilteredBooks] = useState(books)
    const [isLoading, setIsloading] = useState(false);

    const keyUpFunction = (event) => {
        setWord(event.target.value)
        setIsloading(true);

        const filtered = books.filter((book) => {
            return event.target.value.toLowerCase() === '' ? book : book.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFilteredBooks(filtered)

        setIsloading(false);
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <input
                        type='text'
                        value={word}
                        placeholder='Search'
                        onChange={keyUpFunction}
                    />
                </Row>
                <Row>
                    {
                        isLoading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>) :
                                filteredBooks.map((book) => <SingleBook key={book.asin} book={book} />)
                            
                    }
                </Row>
            </Container>
        </>
    )
}

export default AllTheBooks;

/*

{
    filteredBooks.map((book) => <SingleBook key={book.asin} book={book} />)
}

*/