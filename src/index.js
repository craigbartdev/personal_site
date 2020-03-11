import React, {useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import './styles/ScrollBar.css';
import App from './components/App';
import BlogEntry from './components/BlogEntry';
import EditEntry from './components/EditEntry';
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
        axios.get("http://localhost:63656/api/entries")
            .then(res => {
                let entries = [];

                res.data.forEach(e => entries.push({id : e.id, title: e.title, date: e.datePosted, body: e.body}))

                dispatch({type: 'POPULATE_BLOG', entries})
            });

        axios.get("http://localhost:63656/api/comments")
            .then(res => {
                let comments = [];

                res.data.forEach(c => comments.push({cid: c.id, nid: c.entryId, date: c.datePosted, comment: c.body}))
                commentsDispatch({type: 'POPULATE_COMMENTS', comments})
            });
    }, [])

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
                        <Route exact path="/blog/:id" render={(props) => (
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
                        <Route path="/blog/update/:id" render={(props) => (
                            <div>
                                <Header />
                                <EditEntry {...props} />
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
