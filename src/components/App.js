import React from 'react';
import '../styles/App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import banner from '../images/banner.jpg';

function App() {
  return (
    <div>
      <Header />
      <img src={banner} className="banner" alt="banner"/>
      <div id="about"></div>
      <AboutMe />
      <div id="project"></div>
      <Projects />
    </div>
  );
}

export default App;
