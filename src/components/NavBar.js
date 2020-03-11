import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'; //let's us navigate to specific id on page
import logo from '../images/logo.svg';
import '../styles/NavBar.css';

const NavBar = () => {
    const [menu, setMenu] = useState('');

    //class for styling navbar. only includes mobile nav when >= 768px
    let menu_class = `nav-list ${menu}`;

    //toggle for opening and closing mobile nav menu
    const toggleMenuClass = () => {
        menu === '' ? setMenu('toggled') : setMenu('');
    }

    //close dropdown menu when window size becomes greater than 768px
    const handleResize = () => {
        const windowSize = window.innerWidth;
        if (windowSize > 768){
            setMenu('')
        }
    }
    //listen to resize event
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <div className="container">
            <img src={logo} className="logo" alt="logo" />

            <nav id="nav-bar">
                <button className="nav-icon" onClick={toggleMenuClass}>
                    {menu === '' ? <div>Menu</div> : <div>X</div>}
                </button>
                <ul className={menu_class}>
                    <li>
                        <HashLink to="/#about" className="nav-link" onClick={toggleMenuClass}>
                            About Me
                        </HashLink>
                    </li>
                    <li>
                        <HashLink to="/#project" className="nav-link" onClick={toggleMenuClass}>
                            Projects
                        </HashLink>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/wavydomez" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="nav-link"
                            onClick={toggleMenuClass}
                        > 
                            GitHub
                        </a>
                    </li>
                    <li>
                        <Link to="/blog" className="nav-link" onClick={toggleMenuClass}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav> 
        </div>
    )
}

export default NavBar