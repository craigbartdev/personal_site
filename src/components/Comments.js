import React, {useState, useContext} from  'react';
import axios from 'axios';
import Comment from './Comment';
//import getCurrentDate from '../functions/getCurrentDate';
import CommentsContext from '../context/comments-context';
import '../styles/Comments.css';

const Comments = ({id}) => {
    const [comment, setComment] = useState('');

    const {comments, commentsDispatch} = useContext(CommentsContext);

    const addComment = (e) => {
        e.preventDefault();

        const commentPost = {entryId: id, body: comment}

        axios.post("http://localhost:63656/api/comments", commentPost)
            .then(res => {
                const c = res.data;

                commentsDispatch({type: 'ADD_COMMENT', cid: c.id, nid: id, comment, date: c.datePosted});

                setComment('')
            })
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