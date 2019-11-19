import React, {useContext} from 'react';
import CommentsContext from '../context/comments-context';

const Comment = ({cid, date, comment}) => {

    const {commentsDispatch} = useContext(CommentsContext);

    return (
        <div className="comment">
            <span className="date">{date}</span><br/>
            {comment} <br/>
            <button 
                onClick={() => commentsDispatch({type: 'REMOVE_COMMENT', cid})}
            >
                Delete
            </button>
        </div>
    )
}

export default Comment