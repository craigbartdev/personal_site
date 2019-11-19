import React, {useContext} from 'react';
import BlogContext from '../context/blog-context';
import CommentsContext from '../context/comments-context';
import {Link} from 'react-router-dom';
import '../styles/Blog.css';

const Note = ({entry}) => {
    const { dispatch } = useContext(BlogContext)
    const { commentsDispatch } = useContext(CommentsContext)

    const removeEntry = () => {
        dispatch({ type: 'REMOVE_ENTRY', id: entry.id})
        commentsDispatch({ type: 'CLEAR_NOTE_COMMENTS', nid: entry.id})
    }

    return (
        <div className="note">
            <Link to ={"blog/" + entry.id} className="note-link">
                <span className="date">{entry.date}</span>
                <div  className="note-title">{entry.title}</div>
                <div className="note-body">{entry.body}</div>
            </Link>
            <button onClick={removeEntry}>x</button>
        </div>
    )
}

export default Note;