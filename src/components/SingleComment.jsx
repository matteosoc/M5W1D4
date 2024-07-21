import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PutComment from './PutComment';
import Button from 'react-bootstrap/Button';

import { ThemeContext } from '../context/ThemeContextProvider';
import { useContext } from 'react';



function SingleComment({ comment, loadComments }) {

    const {theme, setTheme} = useContext(ThemeContext)

    function handleDeleteComment() {
        console.log('inizia fetch')

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjlkMTdhMzQxNzAwOTAwMTUwZDA0MDUiLCJpYXQiOjE3MjE1NzEyMzUsImV4cCI6MTcyMjc4MDgzNX0.ZKoAxeQutdOygJdYoQol5Z_mz5iGS465ln_TI3CM9q0"
            },
            method: "DELETE",
        })
            .then(alert('eliminato'));

        loadComments()
    }

    return (
        <>
            <ListGroup className='pb-3' data-testid='commentComp'>
                <ListGroup.Item className={theme === 'light' ? 'light' : 'bg-dark text-white'}>Rate: {comment.rate}</ListGroup.Item>
                <ListGroup.Item className={theme === 'light' ? 'light' : 'bg-dark text-white'}>Commento: {comment.comment}</ListGroup.Item>
                <ListGroup.Item className={theme === 'light' ? 'light' : 'bg-dark text-white'}>Autore: {comment.author}</ListGroup.Item>
                <ListGroup.Item className={theme === 'light' ? 'light' : 'bg-dark text-white'}>
                    <PutComment comment={comment} loadComments={loadComments} />
                    <Button size="sm" className='m-2' variant="danger" onClick={handleDeleteComment}>
                        Elimina
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default SingleComment;