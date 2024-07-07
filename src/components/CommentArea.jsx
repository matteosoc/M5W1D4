import { useEffect, useState } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';
import Spinner from 'react-bootstrap';

function CommentArea({ asin }) {
    const [comments, setComments] = useState([])

    const loadComments = async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NTI4ZjJiNWMyMDAwMTUyNzFmYzAiLCJpYXQiOjE3MjAyNzU1OTksImV4cCI6MTcyMTQ4NTE5OX0.1l2L_C5IfmeqdcCMQv4lPw5mDqwTeOs2uBpdvhJseAs"
                }
            })
        const data = await response.json()

        setComments(data)
    }

    useEffect(() => {
        loadComments()
    }, [])

    return (
        <>
            <CommentList comments={comments} />
            <AddComment asin={asin}/>
        </>
    );
}

export default CommentArea;