import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PutComment from './PutComment';
import Button from 'react-bootstrap/Button';



function SingleComment({ comment }) {

    function handleDeleteComment() {
        console.log('inizia fetch')
        console.log(comment._id)

        

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NTI4ZjJiNWMyMDAwMTUyNzFmYzAiLCJpYXQiOjE3MjAyNzU1OTksImV4cCI6MTcyMTQ4NTE5OX0.1l2L_C5IfmeqdcCMQv4lPw5mDqwTeOs2uBpdvhJseAs"
            },
            method: "DELETE",
        })
            .then(alert('eliminato'));
    }

    return (
        <>
            <ListGroup>
                <ListGroup.Item>Rate: {comment.rate}</ListGroup.Item>
                <ListGroup.Item>Commento: {comment.comment}</ListGroup.Item>
                <ListGroup.Item>Autore: {comment.author}</ListGroup.Item>
                <ListGroup.Item>
                    <Button variant="primary" onClick={handleDeleteComment}>
                        Elimina commento
                    </Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <PutComment comment={comment}/>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default SingleComment;