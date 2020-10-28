import React, { useState } from 'react';

const Projects = props => {
    const [projects, setProjects] = useState('Projects')

    return(
        <div>
            {projects}
        </div>
    )
}

export default Projects