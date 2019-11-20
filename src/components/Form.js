import React, {useState, useContext} from 'react';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import BlogContext from '../context/blog-context';
import '../styles/Blog.css';
import getCurrentDate from '../functions/getCurrentDate';

//form for adding to blog
//passed in props is for redirect on buttonclick
const Form = (props) => {

    const { dispatch } = useContext(BlogContext);
    
    const [title, setTitle] = useState(props.entry ? props.entry.title : '');
    const [body, setBody] = useState(props.entry ? props.entry.body : '');

    const addNote = (e) => {
        e.preventDefault()

        const date = getCurrentDate();

        dispatch({ type: 'ADD_ENTRY', title, date, body});
        //make sure the input boxes go back to being blank
        setTitle('')
        setBody('')

        //redirect back to blog list
        props.history.push('/blog');
    }

    const editNote = (e) => {
        e.preventDefault()

        dispatch({type: 'UPDATE_ENTRY', id: props.entry.id, updates: {title, body}})
        setTitle('')
        setBody('')

        props.history.push('/blog')
    }


    return (
        <>
        <ScrollToTopOnMount />
        <div className="form">
            <form onSubmit={props.entry ? editNote : addNote}>
                <h2>Form</h2>
                <input 
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    className="formTitle"
                    placeholder="Title here"
                />
                <textarea
                    onChange={e => setBody(e.target.value)}
                    value={body}
                    className="formBody"
                    placeholder="Write here"
                />
                <button className="formButton">Submit Entry</button>
            </form>
        </div>
        </>
    );
}

export default Form;