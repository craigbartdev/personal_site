import React, {useState, useContext} from 'react';
import BlogContext from '../context/blog-context';
import '../styles/Blog.css';
import getCurrentDate from '../functions/getCurrentDate';

//form for adding to blog
//passed in props is for redirect on buttonclick
const Form = (props) => {

    const { dispatch } = useContext(BlogContext);
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

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


    return (
        <>
        <div className="form">
            <form onSubmit={addNote}>
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