import React from 'react';
import '../styles/Projects.css';
import Project from './Project';

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="projects-title">
                My Projects
            </h1>
            <div className="projects-list">
                <Project 
                    title="Mean Stack Web App" 
                    using={["Mongo", "Express", "Node.js", "Angular", "IBM Watson API", "Youtube API"]}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."
                    link="https://github.com/wavydomez/591-Final-Project"
                />
                <Project 
                    title="This Website"
                    using={["React", "CSS"]}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."
                    link="/"
                />
                <Project 
                    title="Flask and MySQL Web App"
                    using={["Python", "MySQL", "Flask", "Jinja"]}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."
                    link="https://github.com/wavydomez/CS460-Project"
                />
                <Project
                    title="Advanced SQL Queries"
                    using={["SQL Server"]}
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
                    Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet."
                    link="/"
                />
            </div>
        </div>
    )
}

export default Projects;