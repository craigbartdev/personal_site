import React from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'; //let's us navigate to specific id on page
import logo from '../images/logo.svg';
import '../styles/NavBar.css';

const NavBar = () => {
    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo" />

            <nav id="nav-bar">
                <ul id="nav-list">
                    <li>
                        <HashLink to="/#about" className="nav-link">
                            About Me
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="/#project" className="nav-link">
                            Projects
                        </HashLink>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/wavydomez" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="nav-link"
                        > 
                            GitHub
                        </a>
                    </li>
                    <li>
                        <Link to="/blog" className="nav-link">
                            Blog
                        </Link>
                    </li>
                </ul>
        </nav>
      </div>
    )
}

export default NavBar