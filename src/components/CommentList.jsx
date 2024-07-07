import SingleComment from './SingleComment'

function CommentList({ comments }) {
    return (
        <>
            {
                comments.map((comment) => <SingleComment comment={comment} />)
            }
        </>
    )
}


export default CommentList;
