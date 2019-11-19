import React, {useState, useContext} from  'react';
import Comment from './Comment';
import getCurrentDate from '../functions/getCurrentDate';
import CommentsContext from '../context/comments-context';
import '../styles/BlogEntry.css';

const Comments = ({id}) => {
    const [comment, setComment] = useState('');

    const {comments, commentsDispatch} = useContext(CommentsContext);

    const addComment = (e) => {
        e.preventDefault();

        const date = getCurrentDate();

        commentsDispatch({type: 'ADD_COMMENT', nid: id, comment, date});

        setComment('')
    }

    return (
        <>
            <form onSubmit={addComment} className="commentForm">
                <h4>Add Comment</h4>
                <textarea 
                    onChange={e => setComment(e.target.value)}
                    value={comment}
                    className="commentBox"
                    placeholder="Write a comment here..."
                />
                <button className="commentButton">Submit</button>
            </form>
            {comments.map(comment => ( 
                comment.nid === id &&
                <Comment 
                    key={comment.cid} 
                    cid={comment.cid} 
                    date={comment.date} 
                    comment={comment.comment}
                />
            ))}
        </>
    )
}

export default Comments