import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D35AQFpXjURYiaoPg/profile-framedphoto-shrink_800_800/0?e=1600653600&v=beta&t=5TiDeTl6jyUo473isyOhy3eR0PObJT2de2lhtu_R9Fs"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Nandini Penumarthy</h2>
            <p className="subtitle">"A Classical Dancer Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};