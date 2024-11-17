import { useEffect, useState } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';
import { Container } from 'react-bootstrap';

function CommentArea({ asin }) {
    const [isLoading, setIsloading] = useState(false);
    const [comments, setComments] = useState([])


    const loadComments = async () => {
        setIsloading(true);
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
            {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5NTI4ZjJiNWMyMDAwMTUyNzFmYzAiLCJpYXQiOjE3MjAyNzU1OTksImV4cCI6MTcyMTQ4NTE5OX0.1l2L_C5IfmeqdcCMQv4lPw5mDqwTeOs2uBpdvhJseAs"
                }
            })
        const data = await response.json()

        setComments(data)
        setIsloading(false);
    }

    useEffect(() => {
        loadComments()
    }, [asin])

    return (
        <>
            <div className="positionFixedTop">
                <Container>
                    <AddComment asin={asin} loadComments={loadComments} />
                    <h4>Recensioni</h4>
                    <CommentList comments={comments} loadComments={loadComments} />
                </Container>
            </div>
        </>
    );
}

export default CommentArea;


/*

    con lo spinner
            {
                isLoading ?
                    (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>) :
                    (        
                        <>   
                            <AddComment asin={asin} loadComments={loadComments} />
                            <h4>Recensioni</h4> 
                            <CommentList comments={comments}  loadComments={loadComments}/>
                        </>
                    )

            }

*/