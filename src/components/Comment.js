import React, {useContext} from 'react';
import axios from 'axios';
import CommentsContext from '../context/comments-context';
import '../styles/Comment.css';

const Comment = ({cid, date, comment}) => {

    const {commentsDispatch} = useContext(CommentsContext);

    const deleteComment = (e) => {
        e.preventDefault()

        axios.delete("http://localhost:63656/api/comments/" + cid)
            .then(commentsDispatch({type: 'REMOVE_COMMENT', cid}))
    }

    return (
        <div className="comment">
            <span className="date">{date}</span><br/>
            {comment} <br/>
            <button 
                onClick={deleteComment}
            >
                Delete
            </button>
        </div>
    )
}

export default Comment