import React from 'react';
import '../styles/AboutMe.css';
import generic from '../images/generic-profile.png';

const AboutMe = () => {
    return (
        <div className="wrap">
            <div className="about">
                <h2>About Me</h2>
                <img src={generic} className="about_img" alt="logo" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...
                </p>
            </div>
            <hr className="divider"/>
        </div>
    )
}

export default AboutMe;