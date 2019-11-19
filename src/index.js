import React, {useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import BlogEntry from './components/BlogEntry';
import Form from './components/Form';
import Header from './components/Header';
import Notes from './components/Notes';
import NotFound from './components/NotFound';
import blogReducer from './reducers/blog';
import commentsReducer from './reducers/comments';
import BlogContext from './context/blog-context';
import CommentsContext from './context/comments-context';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Routing = () => {
    const [entries, dispatch] = useReducer(blogReducer, []);
    const [comments, commentsDispatch] = useReducer(commentsReducer, []);

    //we always get the entries/comments only when the app mounts
    useEffect(() => {
        const entries = JSON.parse(localStorage.getItem('entries'));
        const comments = JSON.parse(localStorage.getItem('comments'));

        if (entries) {
            dispatch({ type: 'POPULATE_BLOG', entries})
        }

        if (comments) {
            commentsDispatch({ type: 'POPULATE_COMMENTS', comments})
        }
    }, [])

    //any time the entries/comments state updates we update it in storage
    useEffect(() => {
        localStorage.setItem('entries', JSON.stringify(entries))
        localStorage.setItem('comments', JSON.stringify(comments))
    }, [entries, comments])

    return (
        <BlogContext.Provider value={{entries, dispatch}}>
            <CommentsContext.Provider value={{comments, commentsDispatch}}>
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <div>
                                <Header />
                                <App />
                            </div>
                        )} />
                        <Route exact path="/blog" render={() => (
                            <div>
                                <Header />
                                <Notes />
                            </div>
                        )} />
                        <Route path="/blog/:id" render={(props) => (
                            <div>
                                <Header />
                                <BlogEntry {...props}/>
                            </div>
                        )} />              
                        <Route exact path="/blogform" render={props => (
                            <div>
                                <Header />
                                <Form {...props}/> {/* pass props to Form for redirect in form */}
                            </div>
                        )} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </CommentsContext.Provider>
        </BlogContext.Provider>
    )
};

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
