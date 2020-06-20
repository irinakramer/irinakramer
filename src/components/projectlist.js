import React from 'react';
import Project from '../components/project';

export default ({ projects }) => (
    <>
        {
            projects.map(project => (
                <Project project={project} key={project.id} />
            ))
        }
    </>
)