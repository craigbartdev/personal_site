import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import BlogContext from '../context/blog-context';
import '../styles/Blog.css';

const BlogEntry = (props) => {

    //get title from url
    const id = props.match.params.id;

    const { entries } = useContext(BlogContext);

    const entry = entries.find(entry => (entry.id === id))

    return (
        <div className='notes'>
            <ScrollToTopOnMount />
            <Link to="/blog" className="blog-link"><h4>Back to Blog</h4></Link>
            {/* entries loads as undefined for a split second so we wait for it to render */}
            {typeof entry !== 'undefined' ?
            (<div>
                <h1>{entry.title}</h1>
                <hr className="title-hr"/>
                <p className="entry-date">{entry.date}</p>
                <p className="entry-body">{entry.body}</p>
                <Comments id={id}/>
            </div>) :
            (<div>
                 <h2>Loading...</h2>
            </div>
            )}
        </div>
    )
}

export default BlogEntry;