import SingleComment from './SingleComment'

function CommentList({ comments, loadComments }) {
    return (
        <>
            {
                comments.map((comment) => <SingleComment comment={comment} loadComments={loadComments}/>)
            }
        </>
    )
}


export default CommentList;
