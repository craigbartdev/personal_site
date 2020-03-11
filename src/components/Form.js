import React, {useState, useContext} from 'react';
import axios from 'axios';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import BlogContext from '../context/blog-context';
import '../styles/Form.css';
//import getCurrentDate from '../functions/getCurrentDate';

//form for adding to blog
//passed in props is for redirect on buttonclick
const Form = (props) => {

    const { dispatch } = useContext(BlogContext);
    
    const [title, setTitle] = useState(props.entry ? props.entry.title : '');
    const [body, setBody] = useState(props.entry ? props.entry.body : '');
    const [error, setError] = useState(''); //handles validation
    const [errorForm, setErrorForm] = useState(''); //add className to extend form padding on error

    //class to extend form component when error
    let errorFormClass = `form ${errorForm}`;

    const onSubmit = (e) => {
        e.preventDefault()

        if (title === '' || body === '') {

            errorFormClass = setErrorForm('errorForm') //add new class to form div

            if (title === '' && body !== '') {
                setError('Title is required')
            } else if (title !== '' && body === '') {
                setError('Text body is required')
            } else {
                setError('Title and body are required')
            }
        } else {
            props.entry ? editNote() : addNote()

            setError('') //reset error state just to be safe even though we redirect
            setErrorForm('')
        }
    }

    const addNote = () => {

        //from localhost dev environment
        //const date = getCurrentDate();

        const entryPost = {title, body}

        axios.post("http://localhost:63656/api/entries", entryPost)
            .then(res => {
                const e = res.data;

                dispatch({ type: 'ADD_ENTRY', id: e.id, title, date: e.datePosted , body});

                //make sure the input boxes go back to being blank

                setTitle('') //just to be safe even though we redirect
                setBody('')

                //redirect back to blog list
                props.history.push('/blog');
            })
    }

    const editNote = () => {
        const id = props.entry.id

        const entryPut = {title, body}

        axios.put("http://localhost:63656/api/entries/" + id, entryPut)
            .then(res => {

                dispatch({ type: 'UPDATE_ENTRY', id, updates: { title, body }})
                setTitle('')
                setBody('')

                props.history.push('/blog')
            });
    }

    return (
        <>
        <ScrollToTopOnMount />
        <div className={errorFormClass}>
            <form onSubmit={onSubmit}>
                <h2>Form</h2>
                <div className="error">{error}</div>
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