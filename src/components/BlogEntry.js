import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Comments from './Comments';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import BlogContext from '../context/blog-context';
import '../styles/Blog.css';
import '../styles/BlogEntry.css';

const BlogEntry = (props) => {

    //get id from url. convert
    const id = Number(props.match.params.id);

    const { entries } = useContext(BlogContext);

    const entry = entries.find(entry => (entry.id === id))

    return (
        <div className='notes'>
            <ScrollToTopOnMount />
            <Link to="/blog" className="blog-link"><h4>Back to Blog</h4></Link>
            <Link to={"/blog/update/" + id} className="blog-link"><h4>Update Entry</h4></Link>
            {/* entries loads as undefined for a split second so we wait for it to render */}
            {typeof entry !== 'undefined' ?
            (<div>
                <h1>{entry.title}</h1>
                <hr align="left" className="blog-title-hr"/>
                <p className="entry-date">{entry.date}</p>
                <p className="entry-body">{entry.body}</p>
                <Comments id={id}/>
            </div>) :
            (<div>
                 <h2>Loading...</h2>
            </div>
            )}

            {/* <div>
                <h1>{entry.title}</h1>
                <hr align="left" className="blog-title-hr"/>
                <p className="entry-date">{entry.date}</p>
                <p className="entry-body">{entry.body}</p>
                <Comments id={id}/>
            </div> */}
        </div>
    )
}

export default BlogEntry;