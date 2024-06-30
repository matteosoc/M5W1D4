import books from '../data/fantasy.json'
import MyCard from './MyCard'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function AllTheBooks() {

    return (
        <>
            <Container fluid>
                <Row>
                        {
                            books.map((book) => <MyCard key={book.asin} book={book}/>)
                        }
                </Row>
            </Container>
        </>
    )
}

export default AllTheBooks;