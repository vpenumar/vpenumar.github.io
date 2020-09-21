import React from 'react'

import './experiencecard.css';

export const ExperienceCard = ({ experiences }) => {
    return (
        <div className="experiencecard">
            <p><b>Company Name:</b> {experiences.companyName}</p>
            <p><b>Role:</b> {experiences.role}</p>
            <p><b>About:</b> <a href={experiences.about}>{experiences.about}</a> </p>
        </div>
    )
}