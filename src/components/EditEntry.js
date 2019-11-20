import React, {useContext}  from 'react';
import Form from './Form';
import BlogContext from '../context/blog-context';

const EditEntry = (props) => {
    const {entries} = useContext(BlogContext);

    const entry = entries.find(entry => entry.id === props.match.params.id)

    return (
        <>
            <Form entry={entry} {...props}/>
        </>
    )
}

export default EditEntry;