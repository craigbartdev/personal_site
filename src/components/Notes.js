import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Note from './Note';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import BlogContext from '../context/blog-context';
import '../styles/Blog.css';


const Notes = () => {

    const {entries} = useContext(BlogContext)

    return (
        <>
            <ScrollToTopOnMount />
            <div className="notes">
                <h2>Notes</h2>
                <Link to="/blogform" className="blog-link"><h4>Add a New Entry</h4></Link>
                {/*use reverse so that the newest shows up first*/}
                {entries.map((entry) => 
                    <Note key={entry.id} entry={entry} />
                )}
            </div>
        </>
    );
}

export default Notes;