import React from 'react';
import '../styles/Project.css';

const Project = ({title, using, description, link}) => {
    
    //turn array passed in into a string; can also use ToString() method on array or pass prop in as string
    const useLink = (list) => {
        let st = "";

        for (let i = 0; i < list.length; i++) {
            st += list[i]
            if (i !== list.length - 1){
                st += ', '
            }
        }

        return st;
    }

    return (
    <div className="project">
    <h3 className="project-title">{title}</h3>
        <hr className="title-hr"/>
        <h4 className="using">{useLink(using)}</h4>
        <p className="description">
            {description}
        </p>
        <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
        >
            To Repo
        </a>
    </div>
    );
};

export default Project;