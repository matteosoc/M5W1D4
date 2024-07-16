import { useState } from 'react';
import SingleBook from './SingleBook'
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommentArea from './CommentArea';


function AllTheBooks({ filteredBooks, isLoading }) {

    const [selected, setSelected] = useState(null)

    const handleSelected = (asin) => {
        if (selected === asin) {
            setSelected(null)
        } else {
            setSelected(asin)
        }
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={8}>
                        <Row>
                            {
                                isLoading ? (
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>) :
                                    filteredBooks.map((book) => <SingleBook book={book} selected={selected} handleSelected={handleSelected} />)

                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        {selected && <CommentArea asin={selected}></CommentArea>}
                    </Col>
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