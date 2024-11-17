import { useState, useContext } from 'react';
import SingleBook from './SingleBook';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import CommentArea from './CommentArea';
import { ThemeContext } from '../context/ThemeContextProvider';

function AllTheBooks({ filteredBooks, isLoading }) {
    const [selected, setSelected] = useState(null);
    const { theme } = useContext(ThemeContext);

    // Stato per la paginazione
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 9;

    // Calcola l'indice dei libri da mostrare
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

    // Calcola il numero totale di pagine
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    // Gestisci la selezione del libro
    const handleSelected = (asin) => {
        if (selected === asin) {
            setSelected(null);
        } else {
            setSelected(asin);
        }
    };

    // Funzione per cambiare pagina
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Creazione degli elementi di paginazione
    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => handlePageClick(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <>
            <Container fluid className={theme === 'light' ? "p-3" : "bg-dark text-white p-3"}>
                <Row>
                    <Col md={8}>
                        <Row>
                            {isLoading ? (
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            ) : (
                                currentBooks.map((book) => (
                                    <SingleBook
                                        key={book.asin}
                                        book={book}
                                        selected={selected}
                                        handleSelected={handleSelected}
                                    />
                                ))
                            )}
                        </Row>
                        {/* Controlli di Paginazione */}
                        <div className="d-flex justify-content-center mt-3">
                            <Pagination>{paginationItems}</Pagination>
                        </div>
                    </Col>
                    <Col md={4} sticky="top">
                        {selected && <CommentArea asin={selected} />}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AllTheBooks;